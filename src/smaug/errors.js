'use strict';

export function TokenError(message) {
  this.name = 'TokenError';
  this.message = message || 'Generic TokenError';
  this.stack = (new Error()).stack;
  this.httpStatusCode = 400;
  this.httpError = 'generic_token_error';
}
TokenError.prototype = Object.create(Error.prototype);
TokenError.prototype.constructor = TokenError;
TokenError.prototype.toJson = function() {
  return {statusCode: this.httpStatusCode, error: this.httpError, error_description: this.message};
};

export function TokenExpiredError() {
  this.name = 'TokenExpiredError';
  this.message = 'The access token expired';
  this.stack = (new Error()).stack;
  this.httpStatusCode = 401;
  this.httpError = 'invalid_token';

}
TokenExpiredError.prototype = Object.create(TokenError.prototype);
TokenExpiredError.prototype.constructor = TokenExpiredError;

export function MissingTokenError() {
  this.name = 'MissingTokenError';
  this.message = 'Missing access tokens in the request';
  this.stack = (new Error()).stack;
  this.httpStatusCode = 401;
  this.httpError = 'invalid_request';
}
MissingTokenError.prototype = Object.create(TokenError.prototype);
MissingTokenError.prototype.constructor = MultipleTokensError;

export function MultipleTokensError() {
  this.name = 'MultipleTokensError';
  this.message = 'Multiple access tokens in the request';
  this.stack = (new Error()).stack;
  this.httpStatusCode = 400;
  this.httpError = 'invalid_request';
}
MultipleTokensError.prototype = Object.create(TokenError.prototype);
MultipleTokensError.prototype.constructor = MultipleTokensError;
