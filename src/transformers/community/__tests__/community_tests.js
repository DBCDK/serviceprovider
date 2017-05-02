const assert = require('assert');
const request = require('superagent');

const token = 'qwerty';
const parameters = {
  groups: {
    name: 'title'
  },
  profiles: {
    name: 'name'
  }
};

Object.keys(parameters).forEach(entityType => {
  describe(`General query parameters for ${entityType}`, function() {
    describe('offset', function() {
      it('Should start at 0 without offset', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token})
          .end((err, res) => {
            assert.ifError(err);

            const count = res.body.data.Total;
            const items = res.body.data.List;

            assert.equal(count, items[0].id);
            assert.equal(count - 1, items[1].id);
            done();
          });
      });

      it('should offset by 2', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, offset: 2})
          .end((err, res) => {
            assert.ifError(err);

            const count = res.body.data.Total;
            const items = res.body.data.List;

            assert.equal(count - 2, items[0].id);
            assert.equal(count - 3, items[1].id);
            done();
          });
      });
    });

    describe('order', function() {
      it('should order by ascending', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, order: 'ascending'})
          .end((err, res) => {
            assert.ifError(err);

            const items = res.body.data.List;

            assert(items[0].id < items[1].id);
            done();
          });
      });

      it('should order by descending', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, order: 'descending'})
          .end((err, res) => {
            assert.ifError(err);

            const items = res.body.data.List;

            assert(items[0].id > items[1].id);
            done();
          });
      });
    });

    describe('limit', function() {
      it('should return 1 item', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, limit: 1})
          .end((err, res) => {
            assert.ifError(err);

            const items = res.body.data.List;

            assert.equal(items.length, 1);
            done();
          });
      });

      it('should return 5 items', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, limit: 5})
          .end((err, res) => {
            assert.ifError(err);

            const items = res.body.data.List;

            assert.equal(items.length, 5);
            done();
          });
      });

      it('should return 0 items', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, limit: 0})
          .end((err, res) => {
            assert.ifError(err);

            const items = res.body.data.List;

            assert.equal(items.length, 0);
            done();
          });
      });
    });

    describe('sort', function() {
      it('shoud sort by id', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, sort: 'id'})
          .end((err, res) => {
            assert.ifError(err);

            const items = res.body.data.List;

            assert(items[0].id > items[1].id);
            done();
          });
      });

      it('should sort by modified_epoch', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, sort: 'modified_epoch', order: 'ascending'})
          .end((err, res) => {
            assert.ifError(err);
            const items = res.body.data.List;
            assert(items[0].modified_epoch <= items[1].modified_epoch);
            done();
          });
      });
    });

    describe('filters', function() {
      it('should sort out modified_epoch', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, filter: ['modified_epoch']})
          .end((err, res) => {
            assert.ifError(err);
            const items = res.body.data.List;
            assert.equal(Object.keys(items[0]).indexOf('modified_epoch'), -1);
            done();
          });
      });

      it('should sort out created_epoch and modified_epoch', function(done) {
        request
          .get(`http://localhost:8080/v1/community/${entityType}`)
          .query({access_token: token, filter: ['created_epoch', 'modified_epoch']})
          .end((err, res) => {
            assert.ifError(err);
            const items = res.body.data.List;
            assert.equal(Object.keys(items[0]).indexOf('modified_epoch'), -1);
            assert.equal(Object.keys(items[0]).indexOf('created_epoch'), -1);
            done();
          });
      });
    });
  });
});

describe('Test include on group', function() {
  it('should include an owner', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, include: ['owner']})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        items.forEach(group => {
          assert(group.owner.id);
          assert(group.owner.username);
        });
        done();
      });
  });

  it('should include an posts', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, include: ['posts']})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        items.forEach(item => {
          assert(item.posts);
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
          });
        });
        done();
      });
  });

  it('should support objects in arrays for include', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, include: '[{"name": "posts"}, {"name": "owner"}]'})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        items.forEach(item => {
          assert(item.owner);
          assert(item.owner.id);
          assert(item.owner.username);

          assert(item.posts);
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
          });
        });
        done();
      });
  });

  it('should support mix of strings and objects in arrays for include', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, include: '[{"name": "posts"}, "owner"]'})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        items.forEach(item => {
          assert(item.owner);
          assert(item.owner.id);
          assert(item.owner.username);

          assert(item.posts);
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
          });
        });
        done();
      });
  });

  it('should support limits', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, include: '[{"name": "posts", "limit": 10}]'})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        items.forEach(item => {
          assert(item.posts);
          assert(item.posts.List.length > 2); // default limit is 2.
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
          });
        });
        done();
      });
  });

  it('should support offsets', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, include: '[{"name": "posts", "offset": 2}]'})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        items.forEach(item => {
          assert(item.posts);
          assert(item.posts.NextOffset > 2);
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
          });
        });
        done();
      });
  });

  it('should support nested includes', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({access_token: token, limit: 1, include: '[{"name": "posts", "limit": 1, "include": ["comments"]}]'})
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;

        items.forEach(item => {
          assert(item.posts);
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
            assert(post.comments);
            assert(post.comments.Total);

            post.comments.List.forEach(comment => {
              assert(comment.id);
              assert(comment.title);
            });
          });
        });
        done();
      });
  });

  it('should support nested includes with nested includes', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({
        access_token: token,
        limit: 1,
        include: '[{"name": "posts", "limit": 1, "include": [{"name": "comments", "include": ["owner"]}]}]'
      })
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;

        items.forEach(item => {
          assert(item.posts);
          item.posts.List.forEach(post => {
            assert(post.id);
            assert(post.title);
            assert(post.comments);
            assert(post.comments.Total);

            post.comments.List.forEach(comment => {
              assert(comment.id);
              assert(comment.title);
              assert(comment.owner);
              assert(comment.owner.email);
            });
          });
        });
        done();
      });
  });

  it('should support including actions', function(done) {
    request
      .get('http://localhost:8080/v1/community/groups')
      .query({
        access_token: token,
        limit: 1,
        include: JSON.stringify([
          {name: 'flags'},
          {name: 'likes', include: ['owner']},
          {name: 'followers'},
          'quarantines'
        ])
      })
      .end((err, res) => {
        assert.ifError(err);
        const items = res.body.data.List;
        assert(items.length);

        items.forEach(item => {
          assert(item.likes);
          assert(item.likes.Total);

          item.likes.List.forEach(like => {
            assert(like.id);
            assert(like.owner);
          });

          assert(item.flags);
          assert(item.flags.Total);

          item.flags.List.forEach(flag => {
            assert(flag.id);
            assert(flag.flag_reason);
          });

          assert(item.followers);
          assert(item.followers.Total);

          item.followers.List.forEach(follower => {
            assert(follower.id);
            assert(follower.type);
          });
        });
        done();
      });
  });
});
