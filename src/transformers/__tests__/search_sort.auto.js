// AUTOTEST GENERATOR: {"endpoint":"search","params":{"q":"harry ","fields":["identifier","title","collection","subjectDBCF","hasAdaptation","coverUrlFull"],"sort":"rank_title"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'search';
const params = {
  q: 'harry ',
  fields: [
    'identifier',
    'title',
    'collection',
    'subjectDBCF',
    'hasAdaptation',
    'coverUrlFull'
  ],
  sort: 'rank_title'
};

const expected = {
  statusCode: 200,
  data: [
    {
      collection: [
        '870970-basis:51087690',
        '870970-basis:50749061',
        '870970-basis:27447406',
        '870970-basis:24198146',
        '870970-basis:50691446',
        '870970-basis:51087747',
        '870970-basis:50715353',
        '870970-basis:27511864'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087690'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:50749061'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:27447406'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:24198146'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['none'],
          pid: ['870970-basis:50691446'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Film (net)'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087747'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Blu-ray'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:50715353'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Blu-ray'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:27511864'],
          title: ['Dirty Harry'],
          titleFull: ['Dirty Harry'],
          type: ['Blu-ray'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['51087690|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Dirty Harry'],
      dcTitleFull: ['Dirty Harry'],
      titleSeries: ['Dirty Harry collection'],
      alternative: ['Harry el sucia'],
      creatorOth: ['Bruce Surtees'],
      creatorSort: [
        'Surtees, Bruce',
        'Fink, Harry Julian',
        'Fink, R. M.',
        'Riesner, Dean',
        'Siegel, Don'
      ],
      creatorAus: ['Harry Julian Fink', 'R. M. Fink', 'Dean Riesner'],
      creatorDrt: ['Don Siegel'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      subjectDBCS: ['actionfilm', 'politidetektiver', 'seriemordere'],
      subjectGenre: ['actionfilm'],
      subjectDBCO: ['amerikanske film'],
      abstract: [
        'Kriminalassistent Harry Callahan må sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og "Dirty Harry" får altid sin mand og det sidste ord!'
      ],
      description: [
        'Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971',
        'Renewed: 1999',
        'Af indholdet: Special feature'
      ],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 15 år'],
      audience: ['voksenmaterialer'],
      version: ['Renewed edition'],
      publisher: ['Warner Home Video Denmark'],
      contributorAct: [
        'Clint Eastwood',
        'Harry Guardino',
        'Reni Santoni',
        'Andy Robinson',
        'John Larch',
        'John Vernon'
      ],
      date: ['2014'],
      typeBibDKType: ['Dvd'],
      format: ['1 dvd-video'],
      extent: ['102 min.'],
      languageISO6392: ['mul', 'eng'],
      dcLanguage: ['Flere sprog', 'Engelsk'],
      languageSubtitles: [
        'Engelsk',
        'Tysk',
        'Spansk',
        'Tjekkisk',
        'Dansk',
        'Hebraisk',
        'Græsk',
        'Fransk',
        'Kroatisk',
        'Islandsk'
      ],
      spatialDBCS: ['USA'],
      accessType: ['physical'],
      pid: ['870970-basis:51087690'],
      title: ['Dirty Harry'],
      titleFull: ['Dirty Harry'],
      type: ['Dvd'],
      workType: ['movie'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087690&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=dd0656dbc74ba4270739'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087690&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0c49ceef35fa2ab22a3f'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087690&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=37d3d529f0442a367c31'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087690&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=7decdbc5abc0c247a8e0'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087690&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=6595d02ebd6e4acfddb7'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087690&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=63daec494beeba0adb55'
      ],
      hasReview: ['870976-anmeld:30734572']
    },
    {
      collection: ['870970-basis:51087712', '870970-basis:51087763'],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087712'],
          title: ['Dirty Harry renser ud'],
          titleFull: ['The enforcer'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087763'],
          title: ['Dirty Harry renser ud'],
          titleFull: ['The enforcer'],
          type: ['Blu-ray'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['51087712|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Dirty Harry renser ud'],
      dcTitleFull: ['Dirty Harry renser ud'],
      titleSeries: ['Dirty Harry collection'],
      alternative: ['The enforcer'],
      creatorDrt: ['James Fargo'],
      creatorSort: ['Fargo, James'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      subjectDBCS: ['actionfilm', 'politidetektiver'],
      subjectGenre: ['actionfilm'],
      subjectDBCO: ['amerikanske film'],
      abstract: [
        'Strømeren Harry Callahan arbejder helst alene, så han er absolut ikke tilfreds med at få påduttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen hæmsko, da en gruppe terrorister kommer i blodrus'
      ],
      description: [
        'Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976',
        'Renewed edition: 2004',
        'Af indholdet: Special features'
      ],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 15 år'],
      audience: ['voksenmaterialer'],
      version: ['Renewed edition'],
      publisher: ['Warner Home Video Denmark'],
      contributorAus: ['Stirling Silliphant'],
      contributorCng: ['Charles W. Short'],
      contributorDkfig: ['Harry Julian Fink', 'R. M. Fink'],
      contributorAct: [
        'Clint Eastwood',
        'Harry Guardino',
        'Bradford Dillman',
        'John Mitchum',
        'DeVeren Bookwalter',
        'Tyne Daly',
        'John Crawford'
      ],
      date: ['2014'],
      typeBibDKType: ['Dvd'],
      format: ['1 dvd-video'],
      extent: ['96 min.'],
      languageISO6392: ['mul', 'eng'],
      dcLanguage: ['Flere sprog', 'Engelsk'],
      languageSubtitles: [
        'Engelsk',
        'Tysk',
        'Spansk',
        'Hollandsk',
        'Tjekkisk',
        'Dansk',
        'Estisk',
        'Finsk',
        'Norsk',
        'Svensk'
      ],
      spatialDBCS: ['USA'],
      accessType: ['physical'],
      pid: ['870970-basis:51087712'],
      title: ['Dirty Harry renser ud'],
      titleFull: ['The enforcer'],
      type: ['Dvd'],
      workType: ['movie'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087712&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bb644836458026713046'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087712&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=b18f7ab6e4349146f966'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087712&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=e26c845f16d9ab09c800'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087712&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=761e0d288b81d7b70c1c'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087712&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=fccf277ab140501eecdf'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087712&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=5f19b6b763ad6978a105'
      ],
      hasReview: ['870976-anmeld:30734599']
    },
    {
      collection: [
        '870970-basis:51087720',
        '870970-basis:51087771',
        '870970-basis:50715493'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087720'],
          title: ['Dirty Harry vender tilbage'],
          titleFull: ['Sudden impact'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087771'],
          title: ['Dirty Harry vender tilbage'],
          titleFull: ['Sudden impact'],
          type: ['Blu-ray'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:50715493'],
          title: ['Dirty Harry vender tilbage'],
          titleFull: ['Sudden impact'],
          type: ['Blu-ray'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['51087720|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Dirty Harry vender tilbage'],
      dcTitleFull: ['Dirty Harry vender tilbage'],
      titleSeries: ['Dirty Harry collection'],
      alternative: ['Sudden impact'],
      creatorDrt: ['Clint Eastwood'],
      creatorSort: ['Eastwood, Clint (f. 1930)'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      subjectDBCS: ['actionfilm', 'politidetektiver', 'seriemordere'],
      subjectGenre: ['actionfilm'],
      subjectDBCO: ['amerikanske film'],
      abstract: [
        'Der bliver begået en række drab med det fælles træk, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan sættes på sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen'
      ],
      description: ['Produktion: Warner Bros. (USA), 1983'],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 15 år'],
      audience: ['voksenmaterialer'],
      publisher: ['Warner Home Video Denmark'],
      contributorDkfig: ['Harry Julian Fink', 'R. M. Fink'],
      contributorCng: ['Bruce Surtees'],
      contributorAus: [
        'Joseph C. Stinson',
        'Charles B. Pierce',
        'Earl E. Smith'
      ],
      contributorAct: [
        'Clint Eastwood',
        'Sondra Locke',
        'Pat Hingle',
        'Paul Drake',
        'Audrie J. Neenan',
        'Jack Thibeau',
        'Michael Currie'
      ],
      date: ['2014'],
      typeBibDKType: ['Dvd'],
      format: ['1 dvd-video'],
      extent: ['116 min.'],
      languageISO6392: ['mul', 'eng'],
      dcLanguage: ['Flere sprog', 'Engelsk'],
      languageSubtitles: [
        'Engelsk',
        'Tysk',
        'Spansk',
        'Tjekkisk',
        'Dansk',
        'Estisk',
        'Finsk',
        'Norsk',
        'Svensk'
      ],
      spatialDBCS: ['USA'],
      accessType: ['physical'],
      pid: ['870970-basis:51087720'],
      title: ['Dirty Harry vender tilbage'],
      titleFull: ['Sudden impact'],
      type: ['Dvd'],
      workType: ['movie'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087720&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=c922f6e3e2b15a0478ec'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087720&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=eef0e2a8f299869ea850'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087720&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=79aa3d81726b5a625511'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087720&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=5b176c94a940fc282cfa'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087720&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=e6ac456698d4e38e4e76'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087720&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=4efc276f3e87eef01712'
      ],
      hasReview: ['870976-anmeld:30734602']
    },
    {
      collection: [
        '870970-basis:51087739',
        '870970-basis:52128250',
        '870970-basis:51087798'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087739'],
          title: ['Dirty Harry i dødsspillet'],
          titleFull: ['The dead pool'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['none'],
          pid: ['870970-basis:52128250'],
          title: ['Dirty Harry i dødsspillet'],
          titleFull: ['The dead pool'],
          type: ['Film (net)'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087798'],
          title: ['Dirty Harry i dødsspillet'],
          titleFull: ['The dead pool'],
          type: ['Blu-ray'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['51087739|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Dirty Harry i dødsspillet'],
      dcTitleFull: ['Dirty Harry i dødsspillet'],
      titleSeries: ['Dirty Harry collection'],
      alternative: ['The dead pool'],
      creatorDrt: ['Buddy Van Horn'],
      creatorSort: ['Van Horn, Buddy'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      subjectDBCS: ['actionfilm', 'politidetektiver'],
      subjectGenre: ['actionfilm'],
      subjectDBCO: ['amerikanske film'],
      abstract: [
        'Strømeren Harry Callahan opdager, at hans navn figurerer på en makaber dødsliste. Det ene mord følger efter det andet, men "Dirty Harry" har bestemt ikke tænkt sig bare at blive endnu et offer. Han slår igen!'
      ],
      description: [
        'Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988',
        'Af indholdet: Special features'
      ],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 15 år'],
      audience: ['voksenmaterialer'],
      publisher: ['Warner Home Video Denmark'],
      contributorDkfig: ['Harry Julian Fink', 'R. M. Fink'],
      contributorCng: ['Jack N. Green'],
      contributorAus: ['Sandy Shaw', 'Steve Sharon', 'Durk Pearson'],
      contributorAct: [
        'Clint Eastwood',
        'Patricia Clarkson',
        'Liam Neeson',
        'Evan C. Kim'
      ],
      date: ['2014'],
      typeBibDKType: ['Dvd'],
      format: ['1 dvd-video'],
      extent: ['91 min.'],
      languageISO6392: ['mul', 'eng'],
      dcLanguage: ['Flere sprog', 'Engelsk'],
      languageSubtitles: [
        'Engelsk',
        'Tysk',
        'Spansk',
        'Tjekkisk',
        'Dansk',
        'Finsk',
        'Norsk',
        'Portugisisk',
        'Svensk'
      ],
      spatialDBCS: ['USA'],
      accessType: ['physical'],
      pid: ['870970-basis:51087739'],
      title: ['Dirty Harry i dødsspillet'],
      titleFull: ['The dead pool'],
      type: ['Dvd'],
      workType: ['movie'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087739&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=1cf2af7d599de856ac12'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087739&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=545cf6e34025d83fd245'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087739&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=ffcac7100193eeecb773'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087739&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=883b1e6d968ad7909027'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087739&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=a5bc07b50707b6170142'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087739&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=a6a6cbcd0a65a6c2d3ff'
      ],
      hasReview: ['870976-anmeld:30734610']
    },
    {
      collection: [
        '870970-basis:51087704',
        '870970-basis:51087755',
        '870970-basis:50715396'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087704'],
          title: ['Dirty Harry går amok'],
          titleFull: ['Magnum force'],
          type: ['Dvd'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:51087755'],
          title: ['Dirty Harry går amok'],
          titleFull: ['Magnum force'],
          type: ['Blu-ray'],
          workType: ['movie']
        },
        {
          accessType: ['physical'],
          pid: ['870970-basis:50715396'],
          title: ['Dirty Harry går amok'],
          titleFull: ['Magnum force'],
          type: ['Blu-ray'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['51087704|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Dirty Harry går amok'],
      dcTitleFull: ['Dirty Harry går amok'],
      titleSeries: ['Dirty Harry collection'],
      alternative: ['Magnum force'],
      creatorDrt: ['Ted Post'],
      creatorSort: ['Post, Ted'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      subjectDBCS: ['actionfilm', 'politi', 'selvtægt'],
      subjectGenre: ['actionfilm', 'politifilm'],
      subjectDBCO: ['amerikanske film'],
      abstract: [
        'Den utilpassede panser med øgenavnet "Dirty Harry" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne hænder og kynisk henretter formodede forbrydere. Dette er trods alt for stærk en kost for Harry'
      ],
      description: [
        'Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973',
        'Renewed edition: 2001',
        'Af indholdet: Special features'
      ],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 15 år'],
      audience: ['voksenmaterialer'],
      version: ['Renewed edition'],
      publisher: ['Warner Home Video Denmark'],
      contributorAnt: ['Harry Julian Fink', 'R. M. Fink'],
      contributorCng: ['Frank Stanley'],
      contributorAus: ['Michael Cimino', 'John Milius'],
      contributorAct: [
        'Clint Eastwood',
        'Hal Holbrook',
        'Mitchell Ryan',
        'David Soul',
        'Felton Perry'
      ],
      date: ['2014'],
      typeBibDKType: ['Dvd'],
      format: ['1 dvd-video'],
      extent: ['2 t., 2 min.'],
      languageISO6392: ['mul', 'eng'],
      dcLanguage: ['Flere sprog', 'Engelsk'],
      languageSubtitles: [
        'Engelsk',
        'Tysk',
        'Spansk',
        'Tjekkisk',
        'Dansk',
        'Estisk',
        'Finsk',
        'Norsk',
        'Svensk'
      ],
      spatialDBCS: ['USA'],
      accessType: ['physical'],
      pid: ['870970-basis:51087704'],
      title: ['Dirty Harry går amok'],
      titleFull: ['Magnum force'],
      type: ['Dvd'],
      workType: ['movie'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087704&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=13cbee524b5038cae165'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087704&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=a09936077222bbb7aac0'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087704&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=b3417e701bd344f6ec61'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087704&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=3ac0ef7e284ca48db923'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087704&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=10b9cd751fbf0cca718a'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=51087704&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=a14ec1eb59f81f5f71eb'
      ],
      hasReview: ['870976-anmeld:30734580']
    },
    {
      collection: ['870970-basis:40779787'],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:40779787'],
          title: ['Hvem myrdede Harry?'],
          titleFull: ['Hvem myrdede Harry?'],
          type: ['Video'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['40779787|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Hvem myrdede Harry?'],
      dcTitleFull: ['Hvem myrdede Harry?'],
      alternative: ['Trouble with Harry', 'Trouble with Harry'],
      creatorDrt: ['Alfred Hitchcock'],
      creatorSort: ['Hitchcock, Alfred'],
      subjectDK5: ['83'],
      subjectDK5Text: ['Engelsk skønlitteratur'],
      description: ['Originalfilmen: USA : Universal Pictures, 1955'],
      audience: ['voksenmaterialer'],
      publisher: ['CIC Video'],
      contributor: ['John Michael Hayes', 'Alfred Hitchcock', 'Jack Trevor'],
      contributorAct: ['John Forsythe og Shirley Maclaine'],
      date: ['1993'],
      typeBibDKType: ['Video'],
      format: ['1 kassette, VHS'],
      extent: ['95 min.'],
      languageISO6392: ['eng'],
      dcLanguage: ['Engelsk'],
      languageSubtitles: ['Dansk'],
      accessType: ['physical'],
      pid: ['870970-basis:40779787'],
      title: ['Hvem myrdede Harry?'],
      titleFull: ['Hvem myrdede Harry?'],
      type: ['Video'],
      workType: ['movie']
    },
    {
      collection: ['870970-basis:06670687'],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['Pamela Allen'],
          pid: ['870970-basis:06670687'],
          language: ['Dansk'],
          title: ['Herbert & Harry'],
          titleFull: ['Herbert & Harry'],
          type: ['Billedbog'],
          workType: ['book']
        }
      ],
      acIdentifier: ['06670687|870970'],
      identifierISBN: ['87-562-3629-8'],
      acSource: ['Bibliotekskatalog'],
      source: ['Herbert and Harry'],
      dcTitle: ['Herbert & Harry'],
      dcTitleFull: ['Herbert & Harry'],
      alternative: ['Herbert og Harry'],
      creatorAut: ['Pamela Allen'],
      creatorSort: ['Allen, Pamela'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: ['brødre', 'ensomhed', 'rigdom'],
      subjectDK5: ['sk'],
      abstract: [
        'Billedbog. På grund af en skattekiste bliver brødrene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter på skatten, til han bliver gammel, mens Harry nyder livet med sin familie'
      ],
      audience: ['børnematerialer'],
      version: ['1. udg.'],
      publisher: ['Carlsen'],
      date: ['1987'],
      typeBibDKType: ['Billedbog'],
      format: ['illustreret i farver'],
      extent: ['32 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      accessType: ['physical'],
      creator: ['Pamela Allen'],
      pid: ['870970-basis:06670687'],
      language: ['Dansk'],
      title: ['Herbert & Harry'],
      titleFull: ['Herbert & Harry'],
      type: ['Billedbog'],
      workType: ['book'],
      hasCreatorDescription: ['150005-portraet:8967']
    },
    {
      collection: ['870970-basis:24039978'],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:24039978'],
          title: ['Lego creator - Harry Potter'],
          titleFull: ['Lego creator - Harry Potter'],
          type: ['Pc-spil'],
          workType: ['game']
        }
      ],
      acIdentifier: ['24039978|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Lego creator - Harry Potter'],
      dcTitleFull: ['Lego creator - Harry Potter'],
      titleSeries: ['Constructive'],
      alternative: ['Creator - Harry Potter', 'Harry Potter'],
      dcCreator: ['Joanne K. Rowling', 'Paul Grimster', 'Sonja Kristensen'],
      creatorSort: [
        'Rowling, Joanne K.',
        'Grimster, Paul',
        'Kristensen, Sonja'
      ],
      subjectDK5: ['79.41'],
      subjectDK5Text: ['Computerspil'],
      subjectDBCO: ['computerspil'],
      subjectDBCF: ['legoklodser'],
      abstract: [
        'Leg og lær. Du kender Harry Potter og Hogwarts? Her kan du lege med alle de kendte figurer fra bøgerne og samtidig bygge din helt egen magiske Legoverden!'
      ],
      description: ['Titlen hentet fra cd-rometiket'],
      audienceAge: ['Fra 6 år'],
      audience: ['børnematerialer'],
      publisher: ['LEGO Software'],
      date: ['2001'],
      typeBibDKType: ['Pc-spil'],
      format: [
        '1 cd-rom, lyd, farver, 1 brugermanuel',
        'Pc, Pentium II/266 MHz/MMX; 64 MB ram; Windows 98, Me eller 2000; 4× cd-rom/dvddrev; farveskærm (800×600 billedopløsning, 16 bit farver); DirectSound-kompatibelt lydkort'
      ],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      accessType: ['physical'],
      pid: ['870970-basis:24039978'],
      title: ['Lego creator - Harry Potter'],
      titleFull: ['Lego creator - Harry Potter'],
      type: ['Pc-spil'],
      workType: ['game'],
      hasReview: ['870976-anmeld:3036564X']
    },
    {
      collection: ['870970-basis:28854684'],
      collectionDetails: [
        {
          accessType: ['physical'],
          pid: ['870970-basis:28854684'],
          title: ['Harry & Sonja'],
          titleFull: ['Harry & Sonja'],
          type: ['Dvd'],
          workType: ['movie']
        }
      ],
      acIdentifier: ['28854684|870970'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Harry & Sonja'],
      dcTitleFull: ['Harry & Sonja'],
      alternative: ['Harry och Sonja', 'Harry og Sonja'],
      creatorDrt: ['Björn Runge'],
      creatorSort: ['Runge, Björn'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      description: ['Originalfilmen: Sverige : Memfis Film, 1996'],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 11 år'],
      audience: ['voksenmaterialer'],
      publisher: ['Sandrew Metronome'],
      contributor: ['Ulf Brantås', 'Björn Runge'],
      contributorAct: [
        'Stellan Skarsgård',
        'Viveka Seldahl',
        'Sten Ljunggren',
        'Bergljót Àrnadóttir',
        'Regina Lund',
        'Per Oscarsson',
        'Eivin Dahlgren'
      ],
      date: ['2009'],
      typeBibDKType: ['Dvd'],
      format: ['1 dvd-video'],
      extent: ['ca. 97 min.'],
      languageISO6392: ['swe'],
      dcLanguage: ['Svensk'],
      languageSubtitles: ['Norsk', 'Dansk', 'Finsk', 'Engelsk'],
      accessType: ['physical'],
      pid: ['870970-basis:28854684'],
      title: ['Harry & Sonja'],
      titleFull: ['Harry & Sonja'],
      type: ['Dvd'],
      workType: ['movie']
    },
    {
      collection: ['870970-basis:52796202'],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['Felicity Baker (f. 1962)'],
          pid: ['870970-basis:52796202'],
          language: ['Dansk'],
          title: ['Harry Potter'],
          titleFull: ['Harry Potter : filmguide'],
          type: ['Bog'],
          workType: ['book']
        }
      ],
      acIdentifier: ['52796202|870970'],
      identifierISBN: ['9788711565339'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Harry Potter'],
      dcTitleFull: ['Harry Potter : filmguide'],
      titleSeries: ['Harry Potter'],
      creatorAut: ['Felicity Baker (f. 1962)'],
      creatorSort: ['Baker, Felicity (f. 1962)'],
      subjectDK5: ['77.693'],
      subjectDK5Text: ['Filmens historie. England'],
      subjectDBCF: [
        'Harry Potter-film',
        'Potter, Harry',
        'amerikansk film',
        'engelsk film'
      ],
      subjectDBCN: ['for 10 år', 'for 11 år', 'for 12 år', 'for 9 år'],
      description: [
        'Indhold: Filmbegyndelse ; Livet på Hogwarts ; Familie, venner og fjender ; Skabninger og væsener ; Kampen mod Voldemort'
      ],
      audienceAge: ['fra 9 år'],
      audience: ['børnematerialer'],
      version: ['1. udgave, 1. oplag (2016)'],
      publisher: ['Carlsen'],
      contributorTrl: ['Sara Ejersbo Frederiksen'],
      date: ['2016'],
      typeBibDKType: ['Bog'],
      format: ['illustreret i farver'],
      extent: ['62 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      accessType: ['physical'],
      creator: ['Felicity Baker (f. 1962)'],
      pid: ['870970-basis:52796202'],
      language: ['Dansk'],
      title: ['Harry Potter'],
      titleFull: ['Harry Potter : filmguide'],
      type: ['Bog'],
      workType: ['book'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=52796202&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0105966e728dff10c86a'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=52796202&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=475ffe0e268a83ae086f'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=52796202&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=f2e49081f3a1f66302af'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=52796202&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=0e023498f90e94d91803'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=52796202&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=ddbed5360e4bc54c8401'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=52796202&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c763beaa3e725d83271c'
      ],
      hasReview: ['870976-anmeld:31320461']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'XXXXX',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    recommendurls: 'XXXXX',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '726501',
    agency: '726500',
    isil: 'DK-726500'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870970-basis:51087690|870970-basis:51087712|870970-basis:51087720|870970-basis:51087739|870970-basis:51087704|870970-basis:40779787|870970-basis:06670687|870970-basis:24039978|870970-basis:28854684|870970-basis:52796202","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087690","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087690&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=dd0656dbc74ba4270739","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087690&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=0c49ceef35fa2ab22a3f","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087690&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=37d3d529f0442a367c31","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087690&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=7decdbc5abc0c247a8e0","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087690&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=6595d02ebd6e4acfddb7","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087690&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=63daec494beeba0adb55","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087712","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087712&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bb644836458026713046","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087712&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=b18f7ab6e4349146f966","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087712&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=e26c845f16d9ab09c800","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087712&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=761e0d288b81d7b70c1c","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087712&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=fccf277ab140501eecdf","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087712&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=5f19b6b763ad6978a105","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087720","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087720&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=c922f6e3e2b15a0478ec","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087720&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=eef0e2a8f299869ea850","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087720&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=79aa3d81726b5a625511","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087720&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=5b176c94a940fc282cfa","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087720&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=e6ac456698d4e38e4e76","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087720&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=4efc276f3e87eef01712","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087739","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087739&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=1cf2af7d599de856ac12","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087739&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=545cf6e34025d83fd245","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087739&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=ffcac7100193eeecb773","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087739&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=883b1e6d968ad7909027","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087739&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=a5bc07b50707b6170142","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087739&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=a6a6cbcd0a65a6c2d3ff","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087704","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087704&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=13cbee524b5038cae165","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087704&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=a09936077222bbb7aac0","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087704&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=b3417e701bd344f6ec61","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087704&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=3ac0ef7e284ca48db923","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087704&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=10b9cd751fbf0cca718a","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=51087704&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=a14ec1eb59f81f5f71eb","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:40779787","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:06670687","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:24039978","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28854684","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:52796202","@":"mi"},"@":"mi"},"backImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=2c43317e54cf3d18abd9","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=a39f55ba85a28abecbc5","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=30000b096fcd53119608","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=b0b41eadc414409ac2cd","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=b1bb7bf187609dfcaae3","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=bfcb35d13b0c391b4038","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"backPage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=f837d7eb5b072cf3afcb","@":"mi"}],"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=0105966e728dff10c86a","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=475ffe0e268a83ae086f","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=f2e49081f3a1f66302af","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=0e023498f90e94d91803","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=ddbed5360e4bc54c8401","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=52796202&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c763beaa3e725d83271c","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>harry </ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      <ns1:sort>rank_title</ns1:sort>\\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"13096"},"collectionCount":{"$":"10"},"more":{"$":"true"},"sortUsed":{"$":"rank_title"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"51087690|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry el sucia","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, Harry Julian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, R. M.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Dean Riesner","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Riesner, Dean","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Don Siegel","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Siegel, Don","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Kriminalassistent Harry Callahan m\\u00e5 sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og \\"Dirty Harry\\" f\\u00e5r altid sin mand og det sidste ord!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971","@":"dc"},{"$":"Renewed: 1999","@":"dc"},{"$":"Af indholdet: Special feature","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Reni Santoni","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Andy Robinson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Larch","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Vernon","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"102 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hebraisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Gr\\u00e6sk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Fransk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Islandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087690"},"primaryObjectIdentifier":{"$":"870970-basis:51087690"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087690"}]}},{"identifier":{"$":"870970-basis:50749061"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27447406"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:24198146"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50691446"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087747"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715353"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27511864"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087690"},"identifier":{"$":"870970-basis:51087690"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50749061"},"identifier":{"$":"870970-basis:50749061"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27447406"},"identifier":{"$":"870970-basis:27447406"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24198146"},"identifier":{"$":"870970-basis:24198146"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:50691446"},"identifier":{"$":"870970-basis:50691446"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087747"},"identifier":{"$":"870970-basis:51087747"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715353"},"identifier":{"$":"870970-basis:50715353"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27511864"},"identifier":{"$":"870970-basis:27511864"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"51087712|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry renser ud","@":"dc"},{"$":"Dirty Harry renser ud","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The enforcer","@":"dcterms"}],"creator":[{"$":"James Fargo","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Fargo, James","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan arbejder helst alene, s\\u00e5 han er absolut ikke tilfreds med at f\\u00e5 p\\u00e5duttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen h\\u00e6msko, da en gruppe terrorister kommer i blodrus","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976","@":"dc"},{"$":"Renewed edition: 2004","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Stirling Silliphant","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Charles W. Short","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Bradford Dillman","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Mitchum","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"DeVeren Bookwalter","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Tyne Daly","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Crawford","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"96 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hollandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087712"},"primaryObjectIdentifier":{"$":"870970-basis:51087712"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087712"}]}},{"identifier":{"$":"870970-basis:51087763"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087712"},"identifier":{"$":"870970-basis:51087712"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087763"},"identifier":{"$":"870970-basis:51087763"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087720|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry vender tilbage","@":"dc"},{"$":"Dirty Harry vender tilbage","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Sudden impact","@":"dcterms"}],"creator":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Eastwood, Clint (f. 1930)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Der bliver beg\\u00e5et en r\\u00e6kke drab med det f\\u00e6lles tr\\u00e6k, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan s\\u00e6ttes p\\u00e5 sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), 1983","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Joseph C. Stinson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Charles B. Pierce","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Earl E. Smith","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sondra Locke","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Pat Hingle","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Paul Drake","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Audrie J. Neenan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Jack Thibeau","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Michael Currie","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"116 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087720"},"primaryObjectIdentifier":{"$":"870970-basis:51087720"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087720"}]}},{"identifier":{"$":"870970-basis:51087771"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715493"},"creationDate":{"$":"2013-10-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087720"},"identifier":{"$":"870970-basis:51087720"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087771"},"identifier":{"$":"870970-basis:51087771"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715493"},"identifier":{"$":"870970-basis:50715493"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087739|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry i d\\u00f8dsspillet","@":"dc"},{"$":"Dirty Harry i d\\u00f8dsspillet","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The dead pool","@":"dcterms"}],"creator":[{"$":"Buddy Van Horn","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Van Horn, Buddy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan opdager, at hans navn figurerer p\\u00e5 en makaber d\\u00f8dsliste. Det ene mord f\\u00f8lger efter det andet, men \\"Dirty Harry\\" har bestemt ikke t\\u00e6nkt sig bare at blive endnu et offer. Han sl\\u00e5r igen!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Jack N. Green","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Sandy Shaw","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Steve Sharon","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Durk Pearson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Patricia Clarkson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Liam Neeson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Evan C. Kim","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"91 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Portugisisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087739"},"primaryObjectIdentifier":{"$":"870970-basis:51087739"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087739"}]}},{"identifier":{"$":"870970-basis:52128250"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087798"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087739"},"identifier":{"$":"870970-basis:51087739"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:52128250"},"identifier":{"$":"870970-basis:52128250"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087798"},"identifier":{"$":"870970-basis:51087798"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087704|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry g\\u00e5r amok","@":"dc"},{"$":"Dirty Harry g\\u00e5r amok","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Magnum force","@":"dcterms"}],"creator":[{"$":"Ted Post","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Post, Ted","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"politifilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"selvt\\u00e6gt","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Den utilpassede panser med \\u00f8genavnet \\"Dirty Harry\\" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne h\\u00e6nder og kynisk henretter formodede forbrydere. Dette er trods alt for st\\u00e6rk en kost for Harry","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973","@":"dc"},{"$":"Renewed edition: 2001","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"Frank Stanley","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Michael Cimino","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"John Milius","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Hal Holbrook","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Mitchell Ryan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"David Soul","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Felton Perry","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"2 t., 2 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087704"},"primaryObjectIdentifier":{"$":"870970-basis:51087704"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087704"}]}},{"identifier":{"$":"870970-basis:51087755"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715396"},"creationDate":{"$":"2013-10-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087704"},"identifier":{"$":"870970-basis:51087704"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087755"},"identifier":{"$":"870970-basis:51087755"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715396"},"identifier":{"$":"870970-basis:50715396"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"40779787|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hvem myrdede Harry?","@":"dc"},{"$":"Hvem myrdede Harry?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Trouble with Harry","@":"dcterms"},{"$":"Trouble with Harry","@":"dcterms"}],"creator":[{"$":"Alfred Hitchcock","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Hitchcock, Alfred","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"83","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Engelsk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: USA : Universal Pictures, 1955","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CIC Video","@":"dc"}],"contributor":[{"$":"John Michael Hayes","@":"dc"},{"$":"Alfred Hitchcock","@":"dc"},{"$":"Jack Trevor","@":"dc"},{"$":"John Forsythe og Shirley Maclaine","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"1993","@":"dc"}],"type":[{"$":"Video","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 kassette, VHS","@":"dc"}],"extent":[{"$":"95 min.","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:40779787"},"primaryObjectIdentifier":{"$":"870970-basis:40779787"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:40779787"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:40779787"},"identifier":{"$":"870970-basis:40779787"},"title":{"$":"Hvem myrdede Harry?"},"titleFull":{"$":"Hvem myrdede Harry?"},"type":{"$":"Video"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06670687|870970","@":"ac"},{"$":"87-562-3629-8","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Herbert and Harry","@":"dc"}],"title":[{"$":"Herbert & Harry","@":"dc"},{"$":"Herbert & Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Herbert og Harry","@":"dcterms"}],"creator":[{"$":"Pamela Allen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Allen, Pamela","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"br\\u00f8dre","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"ensomhed","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"rigdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Billedbog. P\\u00e5 grund af en skattekiste bliver br\\u00f8drene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter p\\u00e5 skatten, til han bliver gammel, mens Harry nyder livet med sin familie","@":"dcterms"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udg.","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"date":[{"$":"1987","@":"dc"}],"type":[{"$":"Billedbog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"32 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06670687"},"primaryObjectIdentifier":{"$":"870970-basis:06670687"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:06670687"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Pamela Allen"},"fedoraPid":{"$":"870970-basis:06670687"},"identifier":{"$":"870970-basis:06670687"},"language":{"$":"Dansk"},"title":{"$":"Herbert & Harry"},"titleFull":{"$":"Herbert & Harry"},"type":{"$":"Billedbog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"24039978|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Lego creator - Harry Potter","@":"dc"},{"$":"Lego creator - Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Constructive","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Creator - Harry Potter","@":"dcterms"},{"$":"Harry Potter","@":"dcterms"}],"creator":[{"$":"Joanne K. Rowling","@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Paul Grimster","@":"dc"},{"$":"Grimster, Paul","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Sonja Kristensen","@":"dc"},{"$":"Kristensen, Sonja","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"79.41","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Computerspil","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"computerspil","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"legoklodser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Leg og l\\u00e6r. Du kender Harry Potter og Hogwarts? Her kan du lege med alle de kendte figurer fra b\\u00f8gerne og samtidig bygge din helt egen magiske Legoverden!","@":"dcterms"}],"description":[{"$":"Titlen hentet fra cd-rometiket","@":"dc"}],"audience":[{"$":"Fra 6 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"LEGO Software","@":"dc"}],"date":[{"$":"2001","@":"dc"}],"type":[{"$":"Pc-spil","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 cd-rom, lyd, farver, 1 brugermanuel","@":"dc"},{"$":"Pc, Pentium II\\/266 MHz\\/MMX; 64 MB ram; Windows 98, Me eller 2000; 4\\u00d7 cd-rom\\/dvddrev; farvesk\\u00e6rm (800\\u00d7600 billedopl\\u00f8sning, 16 bit farver); DirectSound-kompatibelt lydkort","@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:24039978"},"primaryObjectIdentifier":{"$":"870970-basis:24039978"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:24039978"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24039978"},"identifier":{"$":"870970-basis:24039978"},"title":{"$":"Lego creator - Harry Potter"},"titleFull":{"$":"Lego creator - Harry Potter"},"type":{"$":"Pc-spil"},"workType":{"$":"game"}}]}}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28854684|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry & Sonja","@":"dc"},{"$":"Harry & Sonja","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry och Sonja","@":"dcterms"},{"$":"Harry og Sonja","@":"dcterms"}],"creator":[{"$":"Bj\\u00f6rn Runge","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: Sverige : Memfis Film, 1996","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 11 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Sandrew Metronome","@":"dc"}],"contributor":[{"$":"Ulf Brant\\u00e5s","@":"dc"},{"$":"Bj\\u00f6rn Runge","@":"dc"},{"$":"Stellan Skarsg\\u00e5rd","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Viveka Seldahl","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sten Ljunggren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Berglj\\u00f3t \\u00c0rnad\\u00f3ttir","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Regina Lund","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Per Oscarsson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Eivin Dahlgren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2009","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"ca. 97 min.","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28854684"},"primaryObjectIdentifier":{"$":"870970-basis:28854684"},"recordStatus":{"$":"active"},"creationDate":{"$":"2011-06-29"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28854684"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:28854684"},"identifier":{"$":"870970-basis:28854684"},"title":{"$":"Harry & Sonja"},"titleFull":{"$":"Harry & Sonja"},"type":{"$":"Dvd"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"52796202|870970","@":"ac"},{"$":"9788711565339","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter : filmguide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Felicity Baker (f. 1962)","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Baker, Felicity (f. 1962)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.693","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Filmens historie. England","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter-film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Potter, Harry","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"amerikansk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"for 10 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 11 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 12 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 9 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"}],"description":[{"$":"Indhold: Filmbegyndelse ; Livet p\\u00e5 Hogwarts ; Familie, venner og fjender ; Skabninger og v\\u00e6sener ; Kampen mod Voldemort","@":"dc"}],"audience":[{"$":"fra 9 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2016)","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"contributor":[{"$":"Sara Ejersbo Frederiksen","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2016","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"62 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:52796202"},"primaryObjectIdentifier":{"$":"870970-basis:52796202"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-12-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:52796202"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Felicity Baker (f. 1962)"},"fedoraPid":{"$":"870970-basis:52796202"},"identifier":{"$":"870970-basis:52796202"},"language":{"$":"Dansk"},"title":{"$":"Harry Potter"},"titleFull":{"$":"Harry Potter : filmguide"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"24"},"fedoraRecordsRead":{"$":"96"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>harry </ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      <ns1:sort>rank_title</ns1:sort>\\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"13096"},"collectionCount":{"$":"10"},"more":{"$":"true"},"sortUsed":{"$":"rank_title"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"51087690|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry el sucia","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, Harry Julian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, R. M.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Dean Riesner","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Riesner, Dean","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Don Siegel","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Siegel, Don","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Kriminalassistent Harry Callahan m\\u00e5 sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og \\"Dirty Harry\\" f\\u00e5r altid sin mand og det sidste ord!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971","@":"dc"},{"$":"Renewed: 1999","@":"dc"},{"$":"Af indholdet: Special feature","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Reni Santoni","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Andy Robinson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Larch","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Vernon","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"102 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hebraisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Gr\\u00e6sk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Fransk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Islandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087690"},"primaryObjectIdentifier":{"$":"870970-basis:51087690"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087690"}]}},{"identifier":{"$":"870970-basis:50749061"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27447406"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:24198146"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50691446"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087747"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715353"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27511864"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087690"},"identifier":{"$":"870970-basis:51087690"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50749061"},"identifier":{"$":"870970-basis:50749061"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27447406"},"identifier":{"$":"870970-basis:27447406"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24198146"},"identifier":{"$":"870970-basis:24198146"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:50691446"},"identifier":{"$":"870970-basis:50691446"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087747"},"identifier":{"$":"870970-basis:51087747"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715353"},"identifier":{"$":"870970-basis:50715353"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27511864"},"identifier":{"$":"870970-basis:27511864"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"51087712|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry renser ud","@":"dc"},{"$":"Dirty Harry renser ud","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The enforcer","@":"dcterms"}],"creator":[{"$":"James Fargo","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Fargo, James","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan arbejder helst alene, s\\u00e5 han er absolut ikke tilfreds med at f\\u00e5 p\\u00e5duttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen h\\u00e6msko, da en gruppe terrorister kommer i blodrus","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976","@":"dc"},{"$":"Renewed edition: 2004","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Stirling Silliphant","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Charles W. Short","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Bradford Dillman","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Mitchum","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"DeVeren Bookwalter","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Tyne Daly","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Crawford","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"96 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hollandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087712"},"primaryObjectIdentifier":{"$":"870970-basis:51087712"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087712"}]}},{"identifier":{"$":"870970-basis:51087763"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087712"},"identifier":{"$":"870970-basis:51087712"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087763"},"identifier":{"$":"870970-basis:51087763"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087720|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry vender tilbage","@":"dc"},{"$":"Dirty Harry vender tilbage","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Sudden impact","@":"dcterms"}],"creator":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Eastwood, Clint (f. 1930)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Der bliver beg\\u00e5et en r\\u00e6kke drab med det f\\u00e6lles tr\\u00e6k, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan s\\u00e6ttes p\\u00e5 sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), 1983","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Joseph C. Stinson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Charles B. Pierce","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Earl E. Smith","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sondra Locke","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Pat Hingle","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Paul Drake","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Audrie J. Neenan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Jack Thibeau","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Michael Currie","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"116 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087720"},"primaryObjectIdentifier":{"$":"870970-basis:51087720"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087720"}]}},{"identifier":{"$":"870970-basis:51087771"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715493"},"creationDate":{"$":"2013-10-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087720"},"identifier":{"$":"870970-basis:51087720"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087771"},"identifier":{"$":"870970-basis:51087771"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715493"},"identifier":{"$":"870970-basis:50715493"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087739|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry i d\\u00f8dsspillet","@":"dc"},{"$":"Dirty Harry i d\\u00f8dsspillet","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The dead pool","@":"dcterms"}],"creator":[{"$":"Buddy Van Horn","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Van Horn, Buddy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan opdager, at hans navn figurerer p\\u00e5 en makaber d\\u00f8dsliste. Det ene mord f\\u00f8lger efter det andet, men \\"Dirty Harry\\" har bestemt ikke t\\u00e6nkt sig bare at blive endnu et offer. Han sl\\u00e5r igen!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Jack N. Green","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Sandy Shaw","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Steve Sharon","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Durk Pearson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Patricia Clarkson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Liam Neeson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Evan C. Kim","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"91 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Portugisisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087739"},"primaryObjectIdentifier":{"$":"870970-basis:51087739"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087739"}]}},{"identifier":{"$":"870970-basis:52128250"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087798"},"creationDate":{"$":"2014-05-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087739"},"identifier":{"$":"870970-basis:51087739"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:52128250"},"identifier":{"$":"870970-basis:52128250"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087798"},"identifier":{"$":"870970-basis:51087798"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087704|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry g\\u00e5r amok","@":"dc"},{"$":"Dirty Harry g\\u00e5r amok","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Magnum force","@":"dcterms"}],"creator":[{"$":"Ted Post","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Post, Ted","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"politifilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"selvt\\u00e6gt","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Den utilpassede panser med \\u00f8genavnet \\"Dirty Harry\\" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne h\\u00e6nder og kynisk henretter formodede forbrydere. Dette er trods alt for st\\u00e6rk en kost for Harry","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973","@":"dc"},{"$":"Renewed edition: 2001","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"Frank Stanley","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Michael Cimino","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"John Milius","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Hal Holbrook","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Mitchell Ryan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"David Soul","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Felton Perry","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"2 t., 2 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087704"},"primaryObjectIdentifier":{"$":"870970-basis:51087704"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087704"}]}},{"identifier":{"$":"870970-basis:51087755"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715396"},"creationDate":{"$":"2013-10-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087704"},"identifier":{"$":"870970-basis:51087704"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087755"},"identifier":{"$":"870970-basis:51087755"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715396"},"identifier":{"$":"870970-basis:50715396"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"40779787|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hvem myrdede Harry?","@":"dc"},{"$":"Hvem myrdede Harry?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Trouble with Harry","@":"dcterms"},{"$":"Trouble with Harry","@":"dcterms"}],"creator":[{"$":"Alfred Hitchcock","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Hitchcock, Alfred","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"83","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Engelsk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: USA : Universal Pictures, 1955","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CIC Video","@":"dc"}],"contributor":[{"$":"John Michael Hayes","@":"dc"},{"$":"Alfred Hitchcock","@":"dc"},{"$":"Jack Trevor","@":"dc"},{"$":"John Forsythe og Shirley Maclaine","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"1993","@":"dc"}],"type":[{"$":"Video","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 kassette, VHS","@":"dc"}],"extent":[{"$":"95 min.","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:40779787"},"primaryObjectIdentifier":{"$":"870970-basis:40779787"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:40779787"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:40779787"},"identifier":{"$":"870970-basis:40779787"},"title":{"$":"Hvem myrdede Harry?"},"titleFull":{"$":"Hvem myrdede Harry?"},"type":{"$":"Video"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06670687|870970","@":"ac"},{"$":"87-562-3629-8","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Herbert and Harry","@":"dc"}],"title":[{"$":"Herbert & Harry","@":"dc"},{"$":"Herbert & Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Herbert og Harry","@":"dcterms"}],"creator":[{"$":"Pamela Allen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Allen, Pamela","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"br\\u00f8dre","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"ensomhed","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"rigdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Billedbog. P\\u00e5 grund af en skattekiste bliver br\\u00f8drene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter p\\u00e5 skatten, til han bliver gammel, mens Harry nyder livet med sin familie","@":"dcterms"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udg.","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"date":[{"$":"1987","@":"dc"}],"type":[{"$":"Billedbog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"32 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06670687"},"primaryObjectIdentifier":{"$":"870970-basis:06670687"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:06670687"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Pamela Allen"},"fedoraPid":{"$":"870970-basis:06670687"},"identifier":{"$":"870970-basis:06670687"},"language":{"$":"Dansk"},"title":{"$":"Herbert & Harry"},"titleFull":{"$":"Herbert & Harry"},"type":{"$":"Billedbog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"24039978|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Lego creator - Harry Potter","@":"dc"},{"$":"Lego creator - Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Constructive","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Creator - Harry Potter","@":"dcterms"},{"$":"Harry Potter","@":"dcterms"}],"creator":[{"$":"Joanne K. Rowling","@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Paul Grimster","@":"dc"},{"$":"Grimster, Paul","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Sonja Kristensen","@":"dc"},{"$":"Kristensen, Sonja","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"79.41","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Computerspil","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"computerspil","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"legoklodser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Leg og l\\u00e6r. Du kender Harry Potter og Hogwarts? Her kan du lege med alle de kendte figurer fra b\\u00f8gerne og samtidig bygge din helt egen magiske Legoverden!","@":"dcterms"}],"description":[{"$":"Titlen hentet fra cd-rometiket","@":"dc"}],"audience":[{"$":"Fra 6 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"LEGO Software","@":"dc"}],"date":[{"$":"2001","@":"dc"}],"type":[{"$":"Pc-spil","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 cd-rom, lyd, farver, 1 brugermanuel","@":"dc"},{"$":"Pc, Pentium II\\/266 MHz\\/MMX; 64 MB ram; Windows 98, Me eller 2000; 4\\u00d7 cd-rom\\/dvddrev; farvesk\\u00e6rm (800\\u00d7600 billedopl\\u00f8sning, 16 bit farver); DirectSound-kompatibelt lydkort","@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:24039978"},"primaryObjectIdentifier":{"$":"870970-basis:24039978"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:24039978"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24039978"},"identifier":{"$":"870970-basis:24039978"},"title":{"$":"Lego creator - Harry Potter"},"titleFull":{"$":"Lego creator - Harry Potter"},"type":{"$":"Pc-spil"},"workType":{"$":"game"}}]}}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28854684|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry & Sonja","@":"dc"},{"$":"Harry & Sonja","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry och Sonja","@":"dcterms"},{"$":"Harry og Sonja","@":"dcterms"}],"creator":[{"$":"Bj\\u00f6rn Runge","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: Sverige : Memfis Film, 1996","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 11 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Sandrew Metronome","@":"dc"}],"contributor":[{"$":"Ulf Brant\\u00e5s","@":"dc"},{"$":"Bj\\u00f6rn Runge","@":"dc"},{"$":"Stellan Skarsg\\u00e5rd","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Viveka Seldahl","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sten Ljunggren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Berglj\\u00f3t \\u00c0rnad\\u00f3ttir","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Regina Lund","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Per Oscarsson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Eivin Dahlgren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2009","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"ca. 97 min.","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28854684"},"primaryObjectIdentifier":{"$":"870970-basis:28854684"},"recordStatus":{"$":"active"},"creationDate":{"$":"2011-06-29"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28854684"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:28854684"},"identifier":{"$":"870970-basis:28854684"},"title":{"$":"Harry & Sonja"},"titleFull":{"$":"Harry & Sonja"},"type":{"$":"Dvd"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"52796202|870970","@":"ac"},{"$":"9788711565339","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter : filmguide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Felicity Baker (f. 1962)","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Baker, Felicity (f. 1962)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.693","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Filmens historie. England","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter-film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Potter, Harry","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"amerikansk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"for 10 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 11 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 12 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 9 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"}],"description":[{"$":"Indhold: Filmbegyndelse ; Livet p\\u00e5 Hogwarts ; Familie, venner og fjender ; Skabninger og v\\u00e6sener ; Kampen mod Voldemort","@":"dc"}],"audience":[{"$":"fra 9 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2016)","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"contributor":[{"$":"Sara Ejersbo Frederiksen","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2016","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"62 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:52796202"},"primaryObjectIdentifier":{"$":"870970-basis:52796202"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-12-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:52796202"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Felicity Baker (f. 1962)"},"fedoraPid":{"$":"870970-basis:52796202"},"identifier":{"$":"870970-basis:52796202"},"language":{"$":"Dansk"},"title":{"$":"Harry Potter"},"titleFull":{"$":"Harry Potter : filmguide"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"26"},"fedoraRecordsRead":{"$":"94"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:51087690","870970-basis:51087712","870970-basis:51087720","870970-basis:51087739","870970-basis:51087704","870970-basis:40779787","870970-basis:06670687","870970-basis:24039978","870970-basis:28854684","870970-basis:52796202"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":[],"relationData":"uri"}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"10"},"collectionCount":{"$":"10"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087690|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry el sucia","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, Harry Julian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, R. M.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Dean Riesner","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Riesner, Dean","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Don Siegel","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Siegel, Don","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Kriminalassistent Harry Callahan m\\u00e5 sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og \\"Dirty Harry\\" f\\u00e5r altid sin mand og det sidste ord!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971","@":"dc"},{"$":"Renewed: 1999","@":"dc"},{"$":"Af indholdet: Special feature","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Reni Santoni","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Andy Robinson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Larch","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Vernon","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"102 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hebraisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Gr\\u00e6sk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Fransk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Islandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087690"},"primaryObjectIdentifier":{"$":"870970-basis:51087690"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734572"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087690"}]}}]}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087712|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry renser ud","@":"dc"},{"$":"Dirty Harry renser ud","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The enforcer","@":"dcterms"}],"creator":[{"$":"James Fargo","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Fargo, James","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan arbejder helst alene, s\\u00e5 han er absolut ikke tilfreds med at f\\u00e5 p\\u00e5duttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen h\\u00e6msko, da en gruppe terrorister kommer i blodrus","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976","@":"dc"},{"$":"Renewed edition: 2004","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Stirling Silliphant","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Charles W. Short","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Bradford Dillman","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Mitchum","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"DeVeren Bookwalter","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Tyne Daly","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Crawford","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"96 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hollandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087712"},"primaryObjectIdentifier":{"$":"870970-basis:51087712"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734599"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087712"}]}}]}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087720|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry vender tilbage","@":"dc"},{"$":"Dirty Harry vender tilbage","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Sudden impact","@":"dcterms"}],"creator":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Eastwood, Clint (f. 1930)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Der bliver beg\\u00e5et en r\\u00e6kke drab med det f\\u00e6lles tr\\u00e6k, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan s\\u00e6ttes p\\u00e5 sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), 1983","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Joseph C. Stinson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Charles B. Pierce","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Earl E. Smith","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sondra Locke","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Pat Hingle","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Paul Drake","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Audrie J. Neenan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Jack Thibeau","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Michael Currie","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"116 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087720"},"primaryObjectIdentifier":{"$":"870970-basis:51087720"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734602"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087720"}]}}]}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087739|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry i d\\u00f8dsspillet","@":"dc"},{"$":"Dirty Harry i d\\u00f8dsspillet","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The dead pool","@":"dcterms"}],"creator":[{"$":"Buddy Van Horn","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Van Horn, Buddy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan opdager, at hans navn figurerer p\\u00e5 en makaber d\\u00f8dsliste. Det ene mord f\\u00f8lger efter det andet, men \\"Dirty Harry\\" har bestemt ikke t\\u00e6nkt sig bare at blive endnu et offer. Han sl\\u00e5r igen!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Jack N. Green","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Sandy Shaw","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Steve Sharon","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Durk Pearson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Patricia Clarkson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Liam Neeson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Evan C. Kim","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"91 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Portugisisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087739"},"primaryObjectIdentifier":{"$":"870970-basis:51087739"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-05-02"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734610"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087739"}]}}]}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087704|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry g\\u00e5r amok","@":"dc"},{"$":"Dirty Harry g\\u00e5r amok","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Magnum force","@":"dcterms"}],"creator":[{"$":"Ted Post","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Post, Ted","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"politifilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"selvt\\u00e6gt","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Den utilpassede panser med \\u00f8genavnet \\"Dirty Harry\\" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne h\\u00e6nder og kynisk henretter formodede forbrydere. Dette er trods alt for st\\u00e6rk en kost for Harry","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973","@":"dc"},{"$":"Renewed edition: 2001","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"Frank Stanley","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Michael Cimino","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"John Milius","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Hal Holbrook","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Mitchell Ryan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"David Soul","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Felton Perry","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"2 t., 2 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087704"},"primaryObjectIdentifier":{"$":"870970-basis:51087704"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734580"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087704"}]}}]}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"40779787|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hvem myrdede Harry?","@":"dc"},{"$":"Hvem myrdede Harry?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Trouble with Harry","@":"dcterms"},{"$":"Trouble with Harry","@":"dcterms"}],"creator":[{"$":"Alfred Hitchcock","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Hitchcock, Alfred","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"83","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Engelsk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: USA : Universal Pictures, 1955","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CIC Video","@":"dc"}],"contributor":[{"$":"John Michael Hayes","@":"dc"},{"$":"Alfred Hitchcock","@":"dc"},{"$":"Jack Trevor","@":"dc"},{"$":"John Forsythe og Shirley Maclaine","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"1993","@":"dc"}],"type":[{"$":"Video","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 kassette, VHS","@":"dc"}],"extent":[{"$":"95 min.","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:40779787"},"primaryObjectIdentifier":{"$":"870970-basis:40779787"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:40779787"}]}}]}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06670687|870970","@":"ac"},{"$":"87-562-3629-8","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Herbert and Harry","@":"dc"}],"title":[{"$":"Herbert & Harry","@":"dc"},{"$":"Herbert & Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Herbert og Harry","@":"dcterms"}],"creator":[{"$":"Pamela Allen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Allen, Pamela","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"br\\u00f8dre","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"ensomhed","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"rigdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Billedbog. P\\u00e5 grund af en skattekiste bliver br\\u00f8drene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter p\\u00e5 skatten, til han bliver gammel, mens Harry nyder livet med sin familie","@":"dcterms"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udg.","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"date":[{"$":"1987","@":"dc"}],"type":[{"$":"Billedbog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"32 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06670687"},"primaryObjectIdentifier":{"$":"870970-basis:06670687"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasCreatorDescription"},"relationUri":{"$":"150005-portraet:8967"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:06670687"}]}}]}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"24039978|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Lego creator - Harry Potter","@":"dc"},{"$":"Lego creator - Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Constructive","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Creator - Harry Potter","@":"dcterms"},{"$":"Harry Potter","@":"dcterms"}],"creator":[{"$":"Joanne K. Rowling","@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Paul Grimster","@":"dc"},{"$":"Grimster, Paul","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Sonja Kristensen","@":"dc"},{"$":"Kristensen, Sonja","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"79.41","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Computerspil","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"computerspil","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"legoklodser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Leg og l\\u00e6r. Du kender Harry Potter og Hogwarts? Her kan du lege med alle de kendte figurer fra b\\u00f8gerne og samtidig bygge din helt egen magiske Legoverden!","@":"dcterms"}],"description":[{"$":"Titlen hentet fra cd-rometiket","@":"dc"}],"audience":[{"$":"Fra 6 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"LEGO Software","@":"dc"}],"date":[{"$":"2001","@":"dc"}],"type":[{"$":"Pc-spil","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 cd-rom, lyd, farver, 1 brugermanuel","@":"dc"},{"$":"Pc, Pentium II\\/266 MHz\\/MMX; 64 MB ram; Windows 98, Me eller 2000; 4\\u00d7 cd-rom\\/dvddrev; farvesk\\u00e6rm (800\\u00d7600 billedopl\\u00f8sning, 16 bit farver); DirectSound-kompatibelt lydkort","@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:24039978"},"primaryObjectIdentifier":{"$":"870970-basis:24039978"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:3036564X"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:24039978"}]}}]}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28854684|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry & Sonja","@":"dc"},{"$":"Harry & Sonja","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry och Sonja","@":"dcterms"},{"$":"Harry og Sonja","@":"dcterms"}],"creator":[{"$":"Bj\\u00f6rn Runge","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: Sverige : Memfis Film, 1996","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 11 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Sandrew Metronome","@":"dc"}],"contributor":[{"$":"Ulf Brant\\u00e5s","@":"dc"},{"$":"Bj\\u00f6rn Runge","@":"dc"},{"$":"Stellan Skarsg\\u00e5rd","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Viveka Seldahl","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sten Ljunggren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Berglj\\u00f3t \\u00c0rnad\\u00f3ttir","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Regina Lund","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Per Oscarsson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Eivin Dahlgren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2009","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"ca. 97 min.","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28854684"},"primaryObjectIdentifier":{"$":"870970-basis:28854684"},"recordStatus":{"$":"active"},"creationDate":{"$":"2011-06-29"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28854684"}]}}]}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"52796202|870970","@":"ac"},{"$":"9788711565339","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter : filmguide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Felicity Baker (f. 1962)","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Baker, Felicity (f. 1962)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.693","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Filmens historie. England","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter-film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Potter, Harry","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"amerikansk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"for 10 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 11 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 12 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 9 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"}],"description":[{"$":"Indhold: Filmbegyndelse ; Livet p\\u00e5 Hogwarts ; Familie, venner og fjender ; Skabninger og v\\u00e6sener ; Kampen mod Voldemort","@":"dc"}],"audience":[{"$":"fra 9 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2016)","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"contributor":[{"$":"Sara Ejersbo Frederiksen","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2016","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"62 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:52796202"},"primaryObjectIdentifier":{"$":"870970-basis:52796202"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-12-01"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:31320461"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:52796202"}]}}]}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"34"},"fedoraRecordsRead":{"$":"84"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: search_sort.auto', () => {
  it('has same result as recorded (in search_sort.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-12'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
