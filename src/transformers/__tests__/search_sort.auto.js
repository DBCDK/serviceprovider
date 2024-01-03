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
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087690&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=af8b823c3af91e5e6a50'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087690&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=70bf5a42ebdeba975717'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087690&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=f0de7c8d3387685a59c2'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087690&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=030cbcb7f8d99c5c0aad'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087690&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=968bd413bf2d447fb150'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087690&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=518985ccdcb1f4bb42e7'
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
      creatorAus: ['Stirling Silliphant'],
      creatorSort: [
        'Silliphant, Stirling',
        'Fargo, James',
        'Short, Charles W.'
      ],
      creatorDrt: ['James Fargo'],
      creatorOth: ['Charles W. Short'],
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
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087712&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=84e3376c1d0b526e22ce'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087712&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=51de6ac1dd59bcc17647'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087712&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=674bc97c84d333c5cb29'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087712&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=0710064784a9724f5693'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087712&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=d13ac1a72f35a9e6a3a6'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087712&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=34540c3cc5ffeee7eec1'
      ],
      hasReview: ['870976-anmeld:30734599']
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
      dcCreator: ['Ulf Brantås', 'Björn Runge'],
      creatorSort: ['Brantås, Ulf', 'Runge, Björn', 'Runge, Björn'],
      creatorDrt: ['Björn Runge'],
      subjectDK5: ['77.7'],
      subjectDK5Text: ['Spillefilm'],
      description: ['Originalfilmen: Sverige : Memfis Film, 1996'],
      audienceMedieraad: ['Mærkning: Tilladt for børn over 11 år'],
      audience: ['voksenmaterialer'],
      publisher: ['Sandrew Metronome'],
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
      creatorOth: ['Bruce Surtees'],
      creatorSort: [
        'Surtees, Bruce',
        'Stinson, Joseph C.',
        'Pierce, Charles B.',
        'Smith, Earl E.',
        'Eastwood, Clint (f. 1930)'
      ],
      creatorAus: ['Joseph C. Stinson', 'Charles B. Pierce', 'Earl E. Smith'],
      creatorDrt: ['Clint Eastwood'],
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
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087720&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=d5acbe4c4d2cac8f480a'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087720&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=2b84c9a3aa718e8994fb'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087720&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=f1f74e58c4e1c6af9919'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087720&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=4efbe07cf9b9670f085a'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087720&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=d8cdb643be6ec446ce99'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087720&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=765055f7f2fd3c1149cc'
      ],
      hasReview: ['870976-anmeld:30734602']
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
      creatorOth: ['Frank Stanley'],
      creatorSort: [
        'Stanley, Frank',
        'Milius, John',
        'Post, Ted',
        'Cimino, Michael'
      ],
      creatorAus: ['John Milius', 'Michael Cimino'],
      creatorDrt: ['Ted Post'],
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
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087704&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=834e002a038c4cd2d43a'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087704&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=8cb3865236c36d0b3731'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087704&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3ff2abc812fd4a997dee'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087704&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=23375251fc17af6c576c'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087704&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=58ae9ba801cad8a5fd4c'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087704&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=f8904208d9b18862c39b'
      ],
      hasReview: ['870976-anmeld:30734580']
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
      creatorOth: ['Jack N. Green'],
      creatorSort: [
        'Green, Jack N.',
        'Shaw, Sandy',
        'Sharon, Steve',
        'Pearson, Durk',
        'Van Horn, Buddy'
      ],
      creatorAus: ['Sandy Shaw', 'Steve Sharon', 'Durk Pearson'],
      creatorDrt: ['Buddy Van Horn'],
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
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087739&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=a50d19a77b0834a6dab2'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087739&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=9d4df38240e7d366bc06'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087739&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=059b84690aec49bf632f'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087739&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=40c6b99dffbcf014dc2b'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087739&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=7a6a17f279726709fb64'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51087739&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=3aec39d7351204944f7c'
      ],
      hasReview: ['870976-anmeld:30734610']
    },
    {
      collection: [
        '870970-basis:54129262',
        '870970-basis:54129254',
        '870970-basis:54183038',
        '870970-basis:54168454'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['Emily Herbert'],
          pid: ['870970-basis:54129262'],
          language: ['Dansk'],
          title: ['Harry & Meghan'],
          titleFull: ['Harry & Meghan : en kærlighedshistorie'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['online'],
          creator: ['Emily Herbert'],
          pid: ['870970-basis:54129254'],
          language: ['Dansk'],
          title: ['Harry & Meghan'],
          titleFull: ['Harry & Meghan : en kærlighedshistorie'],
          type: ['Ebog'],
          workType: ['book']
        },
        {
          accessType: ['physical'],
          creator: ['Emily Herbert'],
          pid: ['870970-basis:54183038'],
          language: ['Dansk'],
          title: ['Harry & Meghan'],
          titleFull: ['Harry & Meghan : en kærlighedshistorie'],
          type: ['Lydbog (cd-mp3)'],
          workType: ['audiobook']
        },
        {
          accessType: ['online'],
          creator: ['Emily Herbert'],
          pid: ['870970-basis:54168454'],
          language: ['Dansk'],
          title: ['Harry & Meghan'],
          titleFull: ['Harry & Meghan : en kærlighedshistorie'],
          type: ['Lydbog (net)'],
          workType: ['audiobook']
        }
      ],
      acIdentifier: ['54129262|870970'],
      identifierISBN: ['9788793681019'],
      acSource: ['Bibliotekskatalog'],
      source: ['Harry & Meghan'],
      dcTitle: ['Harry & Meghan'],
      dcTitleFull: ['Harry & Meghan : en kærlighedshistorie'],
      alternative: ['Harry og Meghan'],
      creatorAut: ['Emily Herbert'],
      creatorSort: ['Herbert, Emily'],
      subjectDK5: ['99.4 Henry, prins af Wales'],
      subjectDK5Text: ['Biografier af enkelte personer'],
      subject: ['Henry (prins af Wales)', 'Meghan Markle'],
      subjectSort: ['Henry (prins af Wales)', 'Markle, Meghan'],
      subjectDBCO: ['biografier'],
      subjectDBCF: ['kongehuset', 'kongelige', 'prinser', 'skuespillere'],
      abstract: [
        'En gennemgang af prins Harry (f. 1984) og skuespilleren Meghan Markles (f. 1981) liv før de mødte hinanden, hvordan de blev forelsket og forlovet. Om deres udvikling, samt om hver af deres tidligere kærlighedsforhold, og det faktum at Meghan er fraskilt'
      ],
      audience: ['alment niveau', 'voksenmaterialer'],
      version: ['1. udgave, 1. oplag (2018)'],
      publisher: ['Memoris'],
      contributorTrl: ['Michael Jepsen'],
      date: ['2018'],
      typeBibDKType: ['Bog'],
      extent: ['223 sider, tavler (nogle i farver)'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCF: ['England'],
      accessType: ['physical'],
      creator: ['Emily Herbert'],
      pid: ['870970-basis:54129262'],
      language: ['Dansk'],
      title: ['Harry & Meghan'],
      titleFull: ['Harry & Meghan : en kærlighedshistorie'],
      type: ['Bog'],
      workType: ['book'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=54129262&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=8425cd1db05c0abf22ac'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=54129262&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=5f1d3fd2ecbbf789235e'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=54129262&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=cac0b36b4e8bc9af3f2a'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=54129262&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=7ef3ecd95a93754a6402'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=54129262&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=9e8f4b93d31ff1e0c4f0'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=54129262&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=a9fee9e5ce5dd3516f7e'
      ]
    },
    {
      collection: ['870970-basis:51931904'],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['Joanne K. Rowling'],
          pid: ['870970-basis:51931904'],
          language: ['Kroatisk'],
          title: ['Harry Potter i darovi smrti'],
          titleFull: ['Harry Potter i darovi smrti'],
          type: ['Bog'],
          workType: ['book']
        }
      ],
      acIdentifier: ['51931904|870970'],
      identifierISBN: ['9789533167848'],
      acSource: ['Bibliotekskatalog'],
      source: ['Harry Potter and the deathly hallows'],
      dcTitle: ['Harry Potter i darovi smrti'],
      dcTitleFull: ['Harry Potter i darovi smrti'],
      alternative: ['Harry Potter og dødsregalierne'],
      creatorAut: ['Joanne K. Rowling'],
      creatorSort: ['Rowling, Joanne K.'],
      subjectDK5: ['88.653'],
      subjectDK5Text: ['Kroatisk skønlitteratur'],
      subjectDBCS: ['fantasy', 'magi', 'troldmænd'],
      subjectGenre: ['fantasy'],
      subjectDBCN: [
        'for 12 år',
        'for 13 år',
        'for 14 år',
        'for 15 år',
        'for 16 år'
      ],
      abstract: [
        'Fantasy. Harry Potter er sammen med sine gode venner Ron og Hermione taget ud på en farlig færd. De skal finde den onde troldmand Voldemorts Horcruxer og ødelægge dem. Deres søgen bringer dem mange steder hen og ofte er de i livsfare. Men Voldemort og hans kumpaner er også på jagt efter de forsvundne Horcruxer'
      ],
      descriptionSeries: [
        'Samhørende: Harry Potter og De Vises Sten ; Harry Potter og Hemmelighedernes Kammer ; Harry Potter og fangen fra Azkaban ; Harry Potter og Flammernes Pokal ; Harry Potter og Fønixordenen ; Harry Potter og halvblodsprinsen ; Harry Potter og dødsregalierne'
      ],
      audienceAge: ['fra 12 år'],
      audience: ['børnematerialer'],
      publisher: ['Algoritam'],
      contributorTrl: ['Dubravka Petrović'],
      date: ['2014'],
      typeBibDKType: ['Bog'],
      extent: ['595 sider'],
      languageISO6392: ['scr'],
      dcLanguage: ['Kroatisk'],
      accessType: ['physical'],
      creator: ['Joanne K. Rowling'],
      pid: ['870970-basis:51931904'],
      language: ['Kroatisk'],
      title: ['Harry Potter i darovi smrti'],
      titleFull: ['Harry Potter i darovi smrti'],
      type: ['Bog'],
      workType: ['book'],
      coverUrl117: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51931904&attachment_type=forside_117&bibliotek=870970&source_id=820012&key=65510b61f7600ec2d3f1'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51931904&attachment_type=forside_207&bibliotek=870970&source_id=820012&key=fa50984cef756c4dbd06'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51931904&attachment_type=forside_42&bibliotek=870970&source_id=820012&key=69cd916c29815e30d9ea'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51931904&attachment_type=forside_500&bibliotek=870970&source_id=820012&key=fb40d509559fabe9adeb'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51931904&attachment_type=forside_lille&bibliotek=870970&source_id=820012&key=c3cc0fe65c1699c46686'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=51931904&attachment_type=forside_stor&bibliotek=870970&source_id=820012&key=93bd7c008e0cb3a23fba'
      ],
      hasCreatorDescription: ['870971-forfweb:86203219', '150005-portraet:8660']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
  access: ['moreinfo'],
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '710100', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XclientIdX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870970-basis:51087690|870970-basis:51087712|870970-basis:06670687|870970-basis:28854684|870970-basis:40779787|870970-basis:51087720|870970-basis:51087704|870970-basis:51087739|870970-basis:54129262|870970-basis:51931904","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087690","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087690&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=af8b823c3af91e5e6a50","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087690&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=70bf5a42ebdeba975717","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087690&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=f0de7c8d3387685a59c2","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087690&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=030cbcb7f8d99c5c0aad","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087690&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=968bd413bf2d447fb150","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087690&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=518985ccdcb1f4bb42e7","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087712","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087712&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=84e3376c1d0b526e22ce","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087712&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=51de6ac1dd59bcc17647","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087712&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=674bc97c84d333c5cb29","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087712&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=0710064784a9724f5693","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087712&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=d13ac1a72f35a9e6a3a6","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087712&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=34540c3cc5ffeee7eec1","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:06670687","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28854684","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:40779787","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087720","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087720&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=d5acbe4c4d2cac8f480a","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087720&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=2b84c9a3aa718e8994fb","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087720&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=f1f74e58c4e1c6af9919","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087720&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=4efbe07cf9b9670f085a","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087720&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=d8cdb643be6ec446ce99","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087720&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=765055f7f2fd3c1149cc","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087704","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087704&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=834e002a038c4cd2d43a","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087704&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=8cb3865236c36d0b3731","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087704&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=3ff2abc812fd4a997dee","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087704&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=23375251fc17af6c576c","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087704&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=58ae9ba801cad8a5fd4c","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087704&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=f8904208d9b18862c39b","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51087739","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087739&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=a50d19a77b0834a6dab2","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087739&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=9d4df38240e7d366bc06","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087739&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=059b84690aec49bf632f","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087739&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=40c6b99dffbcf014dc2b","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087739&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=7a6a17f279726709fb64","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51087739&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=3aec39d7351204944f7c","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:54129262","@":"mi"},"@":"mi"},"backImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=216777d97a1f510f0715","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=713d9ab2c6182601fd86","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=c22768be6ada2ed7d3bf","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=8964dab970a93fe55624","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=3a6e2fa0f6ab20f36dcb","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=0774b84a9efd00c555da","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"backPage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=0e03409750fbf7129089","@":"mi"}],"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=8425cd1db05c0abf22ac","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=5f1d3fd2ecbbf789235e","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=cac0b36b4e8bc9af3f2a","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=7ef3ecd95a93754a6402","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=9e8f4b93d31ff1e0c4f0","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=54129262&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=a9fee9e5ce5dd3516f7e","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:51931904","@":"mi"},"@":"mi"},"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51931904&attachment_type=forside_117&bibliotek=870970&source_id=820012&key=65510b61f7600ec2d3f1","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51931904&attachment_type=forside_207&bibliotek=870970&source_id=820012&key=fa50984cef756c4dbd06","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51931904&attachment_type=forside_42&bibliotek=870970&source_id=820012&key=69cd916c29815e30d9ea","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51931904&attachment_type=forside_500&bibliotek=870970&source_id=820012&key=fb40d509559fabe9adeb","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51931904&attachment_type=forside_lille&bibliotek=870970&source_id=820012&key=c3cc0fe65c1699c46686","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=51931904&attachment_type=forside_stor&bibliotek=870970&source_id=820012&key=93bd7c008e0cb3a23fba","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>harry </ns1:query>\\n      <ns1:agency>710100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      <ns1:sort>rank_title</ns1:sort>\\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n      <ns1:trackingId>OP:XclientIdX</ns1:trackingId>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"31904"},"collectionCount":{"$":"10"},"more":{"$":"true"},"sortUsed":{"$":"rank_title"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"51087690|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry el sucia","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, Harry Julian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, R. M.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Dean Riesner","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Riesner, Dean","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Don Siegel","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Siegel, Don","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Kriminalassistent Harry Callahan m\\u00e5 sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og \\"Dirty Harry\\" f\\u00e5r altid sin mand og det sidste ord!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971","@":"dc"},{"$":"Renewed: 1999","@":"dc"},{"$":"Af indholdet: Special feature","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Reni Santoni","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Andy Robinson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Larch","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Vernon","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"102 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hebraisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Gr\\u00e6sk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Fransk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Islandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087690"},"primaryObjectIdentifier":{"$":"870970-basis:51087690"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087690"}]}},{"identifier":{"$":"870970-basis:50749061"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27447406"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:24198146"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50691446"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087747"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715353"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27511864"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087690"},"identifier":{"$":"870970-basis:51087690"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50749061"},"identifier":{"$":"870970-basis:50749061"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27447406"},"identifier":{"$":"870970-basis:27447406"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24198146"},"identifier":{"$":"870970-basis:24198146"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:50691446"},"identifier":{"$":"870970-basis:50691446"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087747"},"identifier":{"$":"870970-basis:51087747"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715353"},"identifier":{"$":"870970-basis:50715353"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27511864"},"identifier":{"$":"870970-basis:27511864"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"51087712|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry renser ud","@":"dc"},{"$":"Dirty Harry renser ud","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The enforcer","@":"dcterms"}],"creator":[{"$":"Stirling Silliphant","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Silliphant, Stirling","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"James Fargo","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Fargo, James","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Charles W. Short","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Short, Charles W.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan arbejder helst alene, s\\u00e5 han er absolut ikke tilfreds med at f\\u00e5 p\\u00e5duttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen h\\u00e6msko, da en gruppe terrorister kommer i blodrus","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976","@":"dc"},{"$":"Renewed edition: 2004","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Bradford Dillman","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Mitchum","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"DeVeren Bookwalter","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Tyne Daly","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Crawford","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"96 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hollandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087712"},"primaryObjectIdentifier":{"$":"870970-basis:51087712"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087712"}]}},{"identifier":{"$":"870970-basis:51087763"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087712"},"identifier":{"$":"870970-basis:51087712"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087763"},"identifier":{"$":"870970-basis:51087763"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06670687|870970","@":"ac"},{"$":"87-562-3629-8","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Herbert and Harry","@":"dc"}],"title":[{"$":"Herbert & Harry","@":"dc"},{"$":"Herbert & Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Herbert og Harry","@":"dcterms"}],"creator":[{"$":"Pamela Allen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Allen, Pamela","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"br\\u00f8dre","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"ensomhed","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"rigdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Billedbog. P\\u00e5 grund af en skattekiste bliver br\\u00f8drene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter p\\u00e5 skatten, til han bliver gammel, mens Harry nyder livet med sin familie","@":"dcterms"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udg.","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"date":[{"$":"1987","@":"dc"}],"type":[{"$":"Billedbog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"32 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06670687"},"primaryObjectIdentifier":{"$":"870970-basis:06670687"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:06670687"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Pamela Allen"},"fedoraPid":{"$":"870970-basis:06670687"},"identifier":{"$":"870970-basis:06670687"},"language":{"$":"Dansk"},"title":{"$":"Herbert & Harry"},"titleFull":{"$":"Herbert & Harry"},"type":{"$":"Billedbog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28854684|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry & Sonja","@":"dc"},{"$":"Harry & Sonja","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry och Sonja","@":"dcterms"},{"$":"Harry og Sonja","@":"dcterms"}],"creator":[{"$":"Ulf Brant\\u00e5s","@":"dc"},{"$":"Brant\\u00e5s, Ulf","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Bj\\u00f6rn Runge","@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Bj\\u00f6rn Runge","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: Sverige : Memfis Film, 1996","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 11 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Sandrew Metronome","@":"dc"}],"contributor":[{"$":"Stellan Skarsg\\u00e5rd","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Viveka Seldahl","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sten Ljunggren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Berglj\\u00f3t \\u00c0rnad\\u00f3ttir","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Regina Lund","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Per Oscarsson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Eivin Dahlgren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2009","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"ca. 97 min.","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28854684"},"primaryObjectIdentifier":{"$":"870970-basis:28854684"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28854684"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:28854684"},"identifier":{"$":"870970-basis:28854684"},"title":{"$":"Harry & Sonja"},"titleFull":{"$":"Harry & Sonja"},"type":{"$":"Dvd"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"40779787|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hvem myrdede Harry?","@":"dc"},{"$":"Hvem myrdede Harry?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Trouble with Harry","@":"dcterms"},{"$":"Trouble with Harry","@":"dcterms"}],"creator":[{"$":"Alfred Hitchcock","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Hitchcock, Alfred","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"83","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Engelsk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: USA : Universal Pictures, 1955","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CIC Video","@":"dc"}],"contributor":[{"$":"John Michael Hayes","@":"dc"},{"$":"Alfred Hitchcock","@":"dc"},{"$":"Jack Trevor","@":"dc"},{"$":"John Forsythe og Shirley Maclaine","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"1993","@":"dc"}],"type":[{"$":"Video","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 kassette, VHS","@":"dc"}],"extent":[{"$":"95 min.","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:40779787"},"primaryObjectIdentifier":{"$":"870970-basis:40779787"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:40779787"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:40779787"},"identifier":{"$":"870970-basis:40779787"},"title":{"$":"Hvem myrdede Harry?"},"titleFull":{"$":"Hvem myrdede Harry?"},"type":{"$":"Video"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087720|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry vender tilbage","@":"dc"},{"$":"Dirty Harry vender tilbage","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Sudden impact","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Joseph C. Stinson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Stinson, Joseph C.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Charles B. Pierce","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Pierce, Charles B.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Earl E. Smith","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Smith, Earl E.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Eastwood, Clint (f. 1930)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Der bliver beg\\u00e5et en r\\u00e6kke drab med det f\\u00e6lles tr\\u00e6k, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan s\\u00e6ttes p\\u00e5 sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), 1983","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sondra Locke","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Pat Hingle","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Paul Drake","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Audrie J. Neenan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Jack Thibeau","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Michael Currie","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"116 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087720"},"primaryObjectIdentifier":{"$":"870970-basis:51087720"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087720"}]}},{"identifier":{"$":"870970-basis:51087771"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715493"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087720"},"identifier":{"$":"870970-basis:51087720"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087771"},"identifier":{"$":"870970-basis:51087771"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715493"},"identifier":{"$":"870970-basis:50715493"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087704|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry g\\u00e5r amok","@":"dc"},{"$":"Dirty Harry g\\u00e5r amok","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Magnum force","@":"dcterms"}],"creator":[{"$":"Frank Stanley","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Stanley, Frank","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"John Milius","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Milius, John","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Ted Post","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Post, Ted","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Michael Cimino","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Cimino, Michael","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"politifilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"selvt\\u00e6gt","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Den utilpassede panser med \\u00f8genavnet \\"Dirty Harry\\" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne h\\u00e6nder og kynisk henretter formodede forbrydere. Dette er trods alt for st\\u00e6rk en kost for Harry","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973","@":"dc"},{"$":"Renewed edition: 2001","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Hal Holbrook","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Mitchell Ryan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"David Soul","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Felton Perry","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"2 t., 2 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087704"},"primaryObjectIdentifier":{"$":"870970-basis:51087704"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087704"}]}},{"identifier":{"$":"870970-basis:51087755"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715396"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087704"},"identifier":{"$":"870970-basis:51087704"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087755"},"identifier":{"$":"870970-basis:51087755"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715396"},"identifier":{"$":"870970-basis:50715396"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087739|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry i d\\u00f8dsspillet","@":"dc"},{"$":"Dirty Harry i d\\u00f8dsspillet","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The dead pool","@":"dcterms"}],"creator":[{"$":"Jack N. Green","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Green, Jack N.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Sandy Shaw","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Shaw, Sandy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Steve Sharon","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Sharon, Steve","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Durk Pearson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Pearson, Durk","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Buddy Van Horn","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Van Horn, Buddy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan opdager, at hans navn figurerer p\\u00e5 en makaber d\\u00f8dsliste. Det ene mord f\\u00f8lger efter det andet, men \\"Dirty Harry\\" har bestemt ikke t\\u00e6nkt sig bare at blive endnu et offer. Han sl\\u00e5r igen!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Patricia Clarkson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Liam Neeson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Evan C. Kim","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"91 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Portugisisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087739"},"primaryObjectIdentifier":{"$":"870970-basis:51087739"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087739"}]}},{"identifier":{"$":"870970-basis:52128250"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087798"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087739"},"identifier":{"$":"870970-basis:51087739"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:52128250"},"identifier":{"$":"870970-basis:52128250"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087798"},"identifier":{"$":"870970-basis:51087798"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"4"},"object":[{"record":{"identifier":[{"$":"54129262|870970","@":"ac"},{"$":"9788793681019","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Harry & Meghan","@":"dc"}],"title":[{"$":"Harry & Meghan","@":"dc"},{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry og Meghan","@":"dcterms"}],"creator":[{"$":"Emily Herbert","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Herbert, Emily","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Henry, prins af Wales","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Henry (prins af Wales)","@":"dc"},{"$":"Henry (prins af Wales)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Meghan Markle","@":"dc"},{"$":"Markle, Meghan","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"kongehuset","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kongelige","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"prinser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skuespillere","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"En gennemgang af prins Harry (f. 1984) og skuespilleren Meghan Markles (f. 1981) liv f\\u00f8r de m\\u00f8dte hinanden, hvordan de blev forelsket og forlovet. Om deres udvikling, samt om hver af deres tidligere k\\u00e6rlighedsforhold, og det faktum at Meghan er fraskilt","@":"dcterms"}],"audience":[{"$":"alment niveau","@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2018)","@":"dkdcplus"}],"publisher":[{"$":"Memoris","@":"dc"}],"contributor":[{"$":"Michael Jepsen","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2018","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"223 sider, tavler (nogle i farver)","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"England","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:54129262"},"primaryObjectIdentifier":{"$":"870970-basis:54129262"},"recordStatus":{"$":"active"},"creationDate":{"$":"2018-04-30"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:54129262"}]}},{"identifier":{"$":"870970-basis:54129254"},"creationDate":{"$":"2018-04-30"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:54183038"},"creationDate":{"$":"2018-05-24"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:54168454"},"creationDate":{"$":"2018-05-18"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54129262"},"identifier":{"$":"870970-basis:54129262"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54129254"},"identifier":{"$":"870970-basis:54129254"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Ebog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54183038"},"identifier":{"$":"870970-basis:54183038"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Lydbog (cd-mp3)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"online"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54168454"},"identifier":{"$":"870970-basis:54168454"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Lydbog (net)"},"workType":{"$":"audiobook"}}]}}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51931904|870970","@":"ac"},{"$":"9789533167848","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Harry Potter and the deathly hallows","@":"dc"}],"title":[{"$":"Harry Potter i darovi smrti","@":"dc"},{"$":"Harry Potter i darovi smrti","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry Potter og d\\u00f8dsregalierne","@":"dcterms"}],"creator":[{"$":"Joanne K. Rowling","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"88.653","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Kroatisk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"for 12 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"magi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"troldm\\u00e6nd","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Fantasy. Harry Potter er sammen med sine gode venner Ron og Hermione taget ud p\\u00e5 en farlig f\\u00e6rd. De skal finde den onde troldmand Voldemorts Horcruxer og \\u00f8del\\u00e6gge dem. Deres s\\u00f8gen bringer dem mange steder hen og ofte er de i livsfare. Men Voldemort og hans kumpaner er ogs\\u00e5 p\\u00e5 jagt efter de forsvundne Horcruxer","@":"dcterms"}],"description":[{"$":"Samh\\u00f8rende: Harry Potter og De Vises Sten ; Harry Potter og Hemmelighedernes Kammer ; Harry Potter og fangen fra Azkaban ; Harry Potter og Flammernes Pokal ; Harry Potter og F\\u00f8nixordenen ; Harry Potter og halvblodsprinsen ; Harry Potter og d\\u00f8dsregalierne","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"audience":[{"$":"fra 12 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"Algoritam","@":"dc"}],"contributor":[{"$":"Dubravka Petrovic\\u0301","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"595 sider","@":"dcterms"}],"language":[{"$":"scr","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51931904"},"primaryObjectIdentifier":{"$":"870970-basis:51931904"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51931904"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Joanne K. Rowling"},"fedoraPid":{"$":"870970-basis:51931904"},"identifier":{"$":"870970-basis:51931904"},"language":{"$":"Kroatisk"},"title":{"$":"Harry Potter i darovi smrti"},"titleFull":{"$":"Harry Potter i darovi smrti"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"27"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>harry </ns1:query>\\n      <ns1:agency>710100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      <ns1:sort>rank_title</ns1:sort>\\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n      <ns1:trackingId>OP:XclientIdX</ns1:trackingId>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"31904"},"collectionCount":{"$":"10"},"more":{"$":"true"},"sortUsed":{"$":"rank_title"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"51087690|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry el sucia","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, Harry Julian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, R. M.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Dean Riesner","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Riesner, Dean","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Don Siegel","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Siegel, Don","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Kriminalassistent Harry Callahan m\\u00e5 sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og \\"Dirty Harry\\" f\\u00e5r altid sin mand og det sidste ord!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971","@":"dc"},{"$":"Renewed: 1999","@":"dc"},{"$":"Af indholdet: Special feature","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Reni Santoni","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Andy Robinson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Larch","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Vernon","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"102 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hebraisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Gr\\u00e6sk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Fransk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Islandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087690"},"primaryObjectIdentifier":{"$":"870970-basis:51087690"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087690"}]}},{"identifier":{"$":"870970-basis:50749061"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27447406"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:24198146"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50691446"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087747"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715353"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27511864"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087690"},"identifier":{"$":"870970-basis:51087690"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50749061"},"identifier":{"$":"870970-basis:50749061"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27447406"},"identifier":{"$":"870970-basis:27447406"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24198146"},"identifier":{"$":"870970-basis:24198146"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:50691446"},"identifier":{"$":"870970-basis:50691446"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087747"},"identifier":{"$":"870970-basis:51087747"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715353"},"identifier":{"$":"870970-basis:50715353"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:27511864"},"identifier":{"$":"870970-basis:27511864"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"51087712|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry renser ud","@":"dc"},{"$":"Dirty Harry renser ud","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The enforcer","@":"dcterms"}],"creator":[{"$":"Stirling Silliphant","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Silliphant, Stirling","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"James Fargo","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Fargo, James","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Charles W. Short","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Short, Charles W.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan arbejder helst alene, s\\u00e5 han er absolut ikke tilfreds med at f\\u00e5 p\\u00e5duttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen h\\u00e6msko, da en gruppe terrorister kommer i blodrus","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976","@":"dc"},{"$":"Renewed edition: 2004","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Bradford Dillman","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Mitchum","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"DeVeren Bookwalter","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Tyne Daly","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Crawford","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"96 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hollandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087712"},"primaryObjectIdentifier":{"$":"870970-basis:51087712"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087712"}]}},{"identifier":{"$":"870970-basis:51087763"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087712"},"identifier":{"$":"870970-basis:51087712"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087763"},"identifier":{"$":"870970-basis:51087763"},"title":{"$":"Dirty Harry renser ud"},"titleFull":{"$":"The enforcer"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06670687|870970","@":"ac"},{"$":"87-562-3629-8","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Herbert and Harry","@":"dc"}],"title":[{"$":"Herbert & Harry","@":"dc"},{"$":"Herbert & Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Herbert og Harry","@":"dcterms"}],"creator":[{"$":"Pamela Allen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Allen, Pamela","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"br\\u00f8dre","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"ensomhed","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"rigdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Billedbog. P\\u00e5 grund af en skattekiste bliver br\\u00f8drene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter p\\u00e5 skatten, til han bliver gammel, mens Harry nyder livet med sin familie","@":"dcterms"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udg.","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"date":[{"$":"1987","@":"dc"}],"type":[{"$":"Billedbog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"32 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06670687"},"primaryObjectIdentifier":{"$":"870970-basis:06670687"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:06670687"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Pamela Allen"},"fedoraPid":{"$":"870970-basis:06670687"},"identifier":{"$":"870970-basis:06670687"},"language":{"$":"Dansk"},"title":{"$":"Herbert & Harry"},"titleFull":{"$":"Herbert & Harry"},"type":{"$":"Billedbog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28854684|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry & Sonja","@":"dc"},{"$":"Harry & Sonja","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry och Sonja","@":"dcterms"},{"$":"Harry og Sonja","@":"dcterms"}],"creator":[{"$":"Ulf Brant\\u00e5s","@":"dc"},{"$":"Brant\\u00e5s, Ulf","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Bj\\u00f6rn Runge","@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Bj\\u00f6rn Runge","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: Sverige : Memfis Film, 1996","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 11 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Sandrew Metronome","@":"dc"}],"contributor":[{"$":"Stellan Skarsg\\u00e5rd","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Viveka Seldahl","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sten Ljunggren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Berglj\\u00f3t \\u00c0rnad\\u00f3ttir","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Regina Lund","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Per Oscarsson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Eivin Dahlgren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2009","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"ca. 97 min.","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28854684"},"primaryObjectIdentifier":{"$":"870970-basis:28854684"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28854684"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:28854684"},"identifier":{"$":"870970-basis:28854684"},"title":{"$":"Harry & Sonja"},"titleFull":{"$":"Harry & Sonja"},"type":{"$":"Dvd"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"40779787|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hvem myrdede Harry?","@":"dc"},{"$":"Hvem myrdede Harry?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Trouble with Harry","@":"dcterms"},{"$":"Trouble with Harry","@":"dcterms"}],"creator":[{"$":"Alfred Hitchcock","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Hitchcock, Alfred","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"83","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Engelsk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: USA : Universal Pictures, 1955","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CIC Video","@":"dc"}],"contributor":[{"$":"John Michael Hayes","@":"dc"},{"$":"Alfred Hitchcock","@":"dc"},{"$":"Jack Trevor","@":"dc"},{"$":"John Forsythe og Shirley Maclaine","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"1993","@":"dc"}],"type":[{"$":"Video","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 kassette, VHS","@":"dc"}],"extent":[{"$":"95 min.","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:40779787"},"primaryObjectIdentifier":{"$":"870970-basis:40779787"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:40779787"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:40779787"},"identifier":{"$":"870970-basis:40779787"},"title":{"$":"Hvem myrdede Harry?"},"titleFull":{"$":"Hvem myrdede Harry?"},"type":{"$":"Video"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087720|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry vender tilbage","@":"dc"},{"$":"Dirty Harry vender tilbage","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Sudden impact","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Joseph C. Stinson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Stinson, Joseph C.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Charles B. Pierce","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Pierce, Charles B.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Earl E. Smith","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Smith, Earl E.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Eastwood, Clint (f. 1930)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Der bliver beg\\u00e5et en r\\u00e6kke drab med det f\\u00e6lles tr\\u00e6k, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan s\\u00e6ttes p\\u00e5 sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), 1983","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sondra Locke","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Pat Hingle","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Paul Drake","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Audrie J. Neenan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Jack Thibeau","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Michael Currie","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"116 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087720"},"primaryObjectIdentifier":{"$":"870970-basis:51087720"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087720"}]}},{"identifier":{"$":"870970-basis:51087771"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715493"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087720"},"identifier":{"$":"870970-basis:51087720"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087771"},"identifier":{"$":"870970-basis:51087771"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715493"},"identifier":{"$":"870970-basis:50715493"},"title":{"$":"Dirty Harry vender tilbage"},"titleFull":{"$":"Sudden impact"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087704|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry g\\u00e5r amok","@":"dc"},{"$":"Dirty Harry g\\u00e5r amok","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Magnum force","@":"dcterms"}],"creator":[{"$":"Frank Stanley","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Stanley, Frank","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"John Milius","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Milius, John","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Ted Post","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Post, Ted","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Michael Cimino","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Cimino, Michael","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"politifilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"selvt\\u00e6gt","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Den utilpassede panser med \\u00f8genavnet \\"Dirty Harry\\" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne h\\u00e6nder og kynisk henretter formodede forbrydere. Dette er trods alt for st\\u00e6rk en kost for Harry","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973","@":"dc"},{"$":"Renewed edition: 2001","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Hal Holbrook","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Mitchell Ryan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"David Soul","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Felton Perry","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"2 t., 2 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087704"},"primaryObjectIdentifier":{"$":"870970-basis:51087704"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087704"}]}},{"identifier":{"$":"870970-basis:51087755"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:50715396"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087704"},"identifier":{"$":"870970-basis:51087704"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087755"},"identifier":{"$":"870970-basis:51087755"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50715396"},"identifier":{"$":"870970-basis:50715396"},"title":{"$":"Dirty Harry g\\u00e5r amok"},"titleFull":{"$":"Magnum force"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"3"},"object":[{"record":{"identifier":[{"$":"51087739|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry i d\\u00f8dsspillet","@":"dc"},{"$":"Dirty Harry i d\\u00f8dsspillet","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The dead pool","@":"dcterms"}],"creator":[{"$":"Jack N. Green","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Green, Jack N.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Sandy Shaw","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Shaw, Sandy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Steve Sharon","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Sharon, Steve","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Durk Pearson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Pearson, Durk","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Buddy Van Horn","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Van Horn, Buddy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan opdager, at hans navn figurerer p\\u00e5 en makaber d\\u00f8dsliste. Det ene mord f\\u00f8lger efter det andet, men \\"Dirty Harry\\" har bestemt ikke t\\u00e6nkt sig bare at blive endnu et offer. Han sl\\u00e5r igen!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Patricia Clarkson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Liam Neeson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Evan C. Kim","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"91 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Portugisisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087739"},"primaryObjectIdentifier":{"$":"870970-basis:51087739"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51087739"}]}},{"identifier":{"$":"870970-basis:52128250"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:51087798"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087739"},"identifier":{"$":"870970-basis:51087739"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Dvd"},"workType":{"$":"movie"}},{"accessType":{"$":"none"},"fedoraPid":{"$":"870970-basis:52128250"},"identifier":{"$":"870970-basis:52128250"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Film (net)"},"workType":{"$":"movie"}},{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:51087798"},"identifier":{"$":"870970-basis:51087798"},"title":{"$":"Dirty Harry i d\\u00f8dsspillet"},"titleFull":{"$":"The dead pool"},"type":{"$":"Blu-ray"},"workType":{"$":"movie"}}]}}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"4"},"object":[{"record":{"identifier":[{"$":"54129262|870970","@":"ac"},{"$":"9788793681019","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Harry & Meghan","@":"dc"}],"title":[{"$":"Harry & Meghan","@":"dc"},{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry og Meghan","@":"dcterms"}],"creator":[{"$":"Emily Herbert","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Herbert, Emily","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Henry, prins af Wales","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Henry (prins af Wales)","@":"dc"},{"$":"Henry (prins af Wales)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Meghan Markle","@":"dc"},{"$":"Markle, Meghan","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"kongehuset","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kongelige","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"prinser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skuespillere","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"En gennemgang af prins Harry (f. 1984) og skuespilleren Meghan Markles (f. 1981) liv f\\u00f8r de m\\u00f8dte hinanden, hvordan de blev forelsket og forlovet. Om deres udvikling, samt om hver af deres tidligere k\\u00e6rlighedsforhold, og det faktum at Meghan er fraskilt","@":"dcterms"}],"audience":[{"$":"alment niveau","@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2018)","@":"dkdcplus"}],"publisher":[{"$":"Memoris","@":"dc"}],"contributor":[{"$":"Michael Jepsen","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2018","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"223 sider, tavler (nogle i farver)","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"England","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:54129262"},"primaryObjectIdentifier":{"$":"870970-basis:54129262"},"recordStatus":{"$":"active"},"creationDate":{"$":"2018-04-30"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:54129262"}]}},{"identifier":{"$":"870970-basis:54129254"},"creationDate":{"$":"2018-04-30"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:54183038"},"creationDate":{"$":"2018-05-24"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:54168454"},"creationDate":{"$":"2018-05-18"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54129262"},"identifier":{"$":"870970-basis:54129262"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54129254"},"identifier":{"$":"870970-basis:54129254"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Ebog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54183038"},"identifier":{"$":"870970-basis:54183038"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Lydbog (cd-mp3)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"online"},"creator":{"$":"Emily Herbert"},"fedoraPid":{"$":"870970-basis:54168454"},"identifier":{"$":"870970-basis:54168454"},"language":{"$":"Dansk"},"title":{"$":"Harry & Meghan"},"titleFull":{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie"},"type":{"$":"Lydbog (net)"},"workType":{"$":"audiobook"}}]}}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51931904|870970","@":"ac"},{"$":"9789533167848","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Harry Potter and the deathly hallows","@":"dc"}],"title":[{"$":"Harry Potter i darovi smrti","@":"dc"},{"$":"Harry Potter i darovi smrti","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry Potter og d\\u00f8dsregalierne","@":"dcterms"}],"creator":[{"$":"Joanne K. Rowling","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"88.653","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Kroatisk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"for 12 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"magi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"troldm\\u00e6nd","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Fantasy. Harry Potter er sammen med sine gode venner Ron og Hermione taget ud p\\u00e5 en farlig f\\u00e6rd. De skal finde den onde troldmand Voldemorts Horcruxer og \\u00f8del\\u00e6gge dem. Deres s\\u00f8gen bringer dem mange steder hen og ofte er de i livsfare. Men Voldemort og hans kumpaner er ogs\\u00e5 p\\u00e5 jagt efter de forsvundne Horcruxer","@":"dcterms"}],"description":[{"$":"Samh\\u00f8rende: Harry Potter og De Vises Sten ; Harry Potter og Hemmelighedernes Kammer ; Harry Potter og fangen fra Azkaban ; Harry Potter og Flammernes Pokal ; Harry Potter og F\\u00f8nixordenen ; Harry Potter og halvblodsprinsen ; Harry Potter og d\\u00f8dsregalierne","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"audience":[{"$":"fra 12 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"Algoritam","@":"dc"}],"contributor":[{"$":"Dubravka Petrovic\\u0301","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"595 sider","@":"dcterms"}],"language":[{"$":"scr","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51931904"},"primaryObjectIdentifier":{"$":"870970-basis:51931904"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51931904"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Joanne K. Rowling"},"fedoraPid":{"$":"870970-basis:51931904"},"identifier":{"$":"870970-basis:51931904"},"language":{"$":"Kroatisk"},"title":{"$":"Harry Potter i darovi smrti"},"titleFull":{"$":"Harry Potter i darovi smrti"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"27"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:51087690","870970-basis:51087712","870970-basis:06670687","870970-basis:28854684","870970-basis:40779787","870970-basis:51087720","870970-basis:51087704","870970-basis:51087739","870970-basis:54129262","870970-basis:51931904"],"agency":"710100","profile":"opac","outputType":"json","trackingId":"OP:XclientIdX","objectFormat":[],"relationData":"uri"}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"10"},"collectionCount":{"$":"10"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087690|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry el sucia","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, Harry Julian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Fink, R. M.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Dean Riesner","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Riesner, Dean","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Don Siegel","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Siegel, Don","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Kriminalassistent Harry Callahan m\\u00e5 sande, at regler og paragraffer er til for at brydes. Ellers slipper en psykopatisk morder godt fra endnu flere forbrydelser, og \\"Dirty Harry\\" f\\u00e5r altid sin mand og det sidste ord!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1971","@":"dc"},{"$":"Renewed: 1999","@":"dc"},{"$":"Af indholdet: Special feature","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Reni Santoni","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Andy Robinson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Larch","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Vernon","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"102 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hebraisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Gr\\u00e6sk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Fransk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Islandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087690"},"primaryObjectIdentifier":{"$":"870970-basis:51087690"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734572"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087712|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry renser ud","@":"dc"},{"$":"Dirty Harry renser ud","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The enforcer","@":"dcterms"}],"creator":[{"$":"Stirling Silliphant","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Silliphant, Stirling","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"James Fargo","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Fargo, James","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Charles W. Short","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Short, Charles W.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan arbejder helst alene, s\\u00e5 han er absolut ikke tilfreds med at f\\u00e5 p\\u00e5duttet en partner, som til og med er kvinde! Og han har slet ikke brug for nogen h\\u00e6msko, da en gruppe terrorister kommer i blodrus","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1976","@":"dc"},{"$":"Renewed edition: 2004","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Harry Guardino","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Bradford Dillman","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Mitchum","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"DeVeren Bookwalter","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Tyne Daly","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"John Crawford","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"96 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Hollandsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087712"},"primaryObjectIdentifier":{"$":"870970-basis:51087712"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734599"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06670687|870970","@":"ac"},{"$":"87-562-3629-8","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Herbert and Harry","@":"dc"}],"title":[{"$":"Herbert & Harry","@":"dc"},{"$":"Herbert & Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Herbert og Harry","@":"dcterms"}],"creator":[{"$":"Pamela Allen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Allen, Pamela","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"br\\u00f8dre","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"ensomhed","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"rigdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Billedbog. P\\u00e5 grund af en skattekiste bliver br\\u00f8drene Herbert og Harrys liv meget forskellige. Den ensomme Herbert vogter p\\u00e5 skatten, til han bliver gammel, mens Harry nyder livet med sin familie","@":"dcterms"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. udg.","@":"dkdcplus"}],"publisher":[{"$":"Carlsen","@":"dc"}],"date":[{"$":"1987","@":"dc"}],"type":[{"$":"Billedbog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"32 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06670687"},"primaryObjectIdentifier":{"$":"870970-basis:06670687"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasCreatorDescription"},"relationUri":{"$":"150005-portraet:8967"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28854684|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry & Sonja","@":"dc"},{"$":"Harry & Sonja","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry och Sonja","@":"dcterms"},{"$":"Harry og Sonja","@":"dcterms"}],"creator":[{"$":"Ulf Brant\\u00e5s","@":"dc"},{"$":"Brant\\u00e5s, Ulf","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Bj\\u00f6rn Runge","@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Bj\\u00f6rn Runge","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Runge, Bj\\u00f6rn","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: Sverige : Memfis Film, 1996","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 11 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Sandrew Metronome","@":"dc"}],"contributor":[{"$":"Stellan Skarsg\\u00e5rd","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Viveka Seldahl","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sten Ljunggren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Berglj\\u00f3t \\u00c0rnad\\u00f3ttir","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Regina Lund","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Per Oscarsson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Eivin Dahlgren","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2009","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"ca. 97 min.","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28854684"},"primaryObjectIdentifier":{"$":"870970-basis:28854684"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"40779787|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hvem myrdede Harry?","@":"dc"},{"$":"Hvem myrdede Harry?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Trouble with Harry","@":"dcterms"},{"$":"Trouble with Harry","@":"dcterms"}],"creator":[{"$":"Alfred Hitchcock","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Hitchcock, Alfred","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"83","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Engelsk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"Originalfilmen: USA : Universal Pictures, 1955","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CIC Video","@":"dc"}],"contributor":[{"$":"John Michael Hayes","@":"dc"},{"$":"Alfred Hitchcock","@":"dc"},{"$":"Jack Trevor","@":"dc"},{"$":"John Forsythe og Shirley Maclaine","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"1993","@":"dc"}],"type":[{"$":"Video","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 kassette, VHS","@":"dc"}],"extent":[{"$":"95 min.","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:40779787"},"primaryObjectIdentifier":{"$":"870970-basis:40779787"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087720|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry vender tilbage","@":"dc"},{"$":"Dirty Harry vender tilbage","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Sudden impact","@":"dcterms"}],"creator":[{"$":"Bruce Surtees","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Surtees, Bruce","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Joseph C. Stinson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Stinson, Joseph C.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Charles B. Pierce","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Pierce, Charles B.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Earl E. Smith","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Smith, Earl E.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Eastwood, Clint (f. 1930)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"seriemordere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Der bliver beg\\u00e5et en r\\u00e6kke drab med det f\\u00e6lles tr\\u00e6k, at alle ofrene er skudt i skridtet! Kriminalassistent Harry Callahan s\\u00e6ttes p\\u00e5 sagen og opdager til sin forundring, at han gradvis fatter sympati for morderen","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), 1983","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Sondra Locke","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Pat Hingle","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Paul Drake","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Audrie J. Neenan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Jack Thibeau","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Michael Currie","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"116 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087720"},"primaryObjectIdentifier":{"$":"870970-basis:51087720"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734602"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087704|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry g\\u00e5r amok","@":"dc"},{"$":"Dirty Harry g\\u00e5r amok","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Magnum force","@":"dcterms"}],"creator":[{"$":"Frank Stanley","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Stanley, Frank","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"John Milius","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Milius, John","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Ted Post","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Post, Ted","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Michael Cimino","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Cimino, Michael","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"politifilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"selvt\\u00e6gt","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Den utilpassede panser med \\u00f8genavnet \\"Dirty Harry\\" finder ud af, at en gruppe nyuddannede politibetjente tager loven i egne h\\u00e6nder og kynisk henretter formodede forbrydere. Dette er trods alt for st\\u00e6rk en kost for Harry","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1973","@":"dc"},{"$":"Renewed edition: 2001","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"Renewed edition","@":"dkdcplus"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:ant","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Hal Holbrook","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Mitchell Ryan","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"David Soul","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Felton Perry","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"2 t., 2 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Estisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087704"},"primaryObjectIdentifier":{"$":"870970-basis:51087704"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734580"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51087739|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Dirty Harry i d\\u00f8dsspillet","@":"dc"},{"$":"Dirty Harry i d\\u00f8dsspillet","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Dirty Harry collection","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"The dead pool","@":"dcterms"}],"creator":[{"$":"Jack N. Green","@type":{"$":"dkdcplus:cng","@":"xsi"},"@":"dc"},{"$":"Green, Jack N.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Sandy Shaw","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Shaw, Sandy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Steve Sharon","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Sharon, Steve","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Durk Pearson","@type":{"$":"dkdcplus:aus","@":"xsi"},"@":"dc"},{"$":"Pearson, Durk","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Buddy Van Horn","@type":{"$":"dkdcplus:drt","@":"xsi"},"@":"dc"},{"$":"Van Horn, Buddy","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"77.7","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Spillefilm","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"actionfilm","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"amerikanske film","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"politidetektiver","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Str\\u00f8meren Harry Callahan opdager, at hans navn figurerer p\\u00e5 en makaber d\\u00f8dsliste. Det ene mord f\\u00f8lger efter det andet, men \\"Dirty Harry\\" har bestemt ikke t\\u00e6nkt sig bare at blive endnu et offer. Han sl\\u00e5r igen!","@":"dcterms"}],"description":[{"$":"Produktion: Warner Bros. (USA), Malpaso Company (USA), 1988","@":"dc"},{"$":"Af indholdet: Special features","@":"dc"}],"audience":[{"$":"M\\u00e6rkning: Tilladt for b\\u00f8rn over 15 \\u00e5r","@type":{"$":"dkdcplus:medieraad","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warner Home Video Denmark","@":"dc"}],"contributor":[{"$":"Harry Julian Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"R. M. Fink","@type":{"$":"dkdcplus:dkfig","@":"xsi"},"@":"dc"},{"$":"Clint Eastwood","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Patricia Clarkson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Liam Neeson","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"},{"$":"Evan C. Kim","@type":{"$":"dkdcplus:act","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Dvd","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 dvd-video","@":"dc"}],"extent":[{"$":"91 min.","@":"dcterms"}],"language":[{"$":"mul","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Flere sprog","@":"dc"},{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"},{"$":"Engelsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tysk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Spansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Tjekkisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Dansk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Finsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Norsk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Portugisisk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"},{"$":"Svensk","@type":{"$":"dkdcplus:subtitles","@":"xsi"},"@":"dc"}],"spatial":[{"$":"USA","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51087739"},"primaryObjectIdentifier":{"$":"870970-basis:51087739"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasReview"},"relationUri":{"$":"870976-anmeld:30734610"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"54129262|870970","@":"ac"},{"$":"9788793681019","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Harry & Meghan","@":"dc"}],"title":[{"$":"Harry & Meghan","@":"dc"},{"$":"Harry & Meghan : en k\\u00e6rlighedshistorie","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry og Meghan","@":"dcterms"}],"creator":[{"$":"Emily Herbert","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Herbert, Emily","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Henry, prins af Wales","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Henry (prins af Wales)","@":"dc"},{"$":"Henry (prins af Wales)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Meghan Markle","@":"dc"},{"$":"Markle, Meghan","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"kongehuset","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kongelige","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"prinser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skuespillere","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"En gennemgang af prins Harry (f. 1984) og skuespilleren Meghan Markles (f. 1981) liv f\\u00f8r de m\\u00f8dte hinanden, hvordan de blev forelsket og forlovet. Om deres udvikling, samt om hver af deres tidligere k\\u00e6rlighedsforhold, og det faktum at Meghan er fraskilt","@":"dcterms"}],"audience":[{"$":"alment niveau","@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2018)","@":"dkdcplus"}],"publisher":[{"$":"Memoris","@":"dc"}],"contributor":[{"$":"Michael Jepsen","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2018","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"223 sider, tavler (nogle i farver)","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"England","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:54129262"},"primaryObjectIdentifier":{"$":"870970-basis:54129262"},"recordStatus":{"$":"active"},"creationDate":{"$":"2018-04-30"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51931904|870970","@":"ac"},{"$":"9789533167848","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Harry Potter and the deathly hallows","@":"dc"}],"title":[{"$":"Harry Potter i darovi smrti","@":"dc"},{"$":"Harry Potter i darovi smrti","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Harry Potter og d\\u00f8dsregalierne","@":"dcterms"}],"creator":[{"$":"Joanne K. Rowling","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"88.653","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Kroatisk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"for 12 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"magi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"troldm\\u00e6nd","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Fantasy. Harry Potter er sammen med sine gode venner Ron og Hermione taget ud p\\u00e5 en farlig f\\u00e6rd. De skal finde den onde troldmand Voldemorts Horcruxer og \\u00f8del\\u00e6gge dem. Deres s\\u00f8gen bringer dem mange steder hen og ofte er de i livsfare. Men Voldemort og hans kumpaner er ogs\\u00e5 p\\u00e5 jagt efter de forsvundne Horcruxer","@":"dcterms"}],"description":[{"$":"Samh\\u00f8rende: Harry Potter og De Vises Sten ; Harry Potter og Hemmelighedernes Kammer ; Harry Potter og fangen fra Azkaban ; Harry Potter og Flammernes Pokal ; Harry Potter og F\\u00f8nixordenen ; Harry Potter og halvblodsprinsen ; Harry Potter og d\\u00f8dsregalierne","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"audience":[{"$":"fra 12 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"Algoritam","@":"dc"}],"contributor":[{"$":"Dubravka Petrovic\\u0301","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"595 sider","@":"dcterms"}],"language":[{"$":"scr","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Kroatisk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51931904"},"primaryObjectIdentifier":{"$":"870970-basis:51931904"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasCreatorDescription"},"relationUri":{"$":"870971-forfweb:86203219"}},{"relationType":{"$":"dbcaddi:hasCreatorDescription"},"relationUri":{"$":"150005-portraet:8660"}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"34"},"fedoraRecordsRead":{"$":"58"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: search_sort.auto', () => {
  it('has same result as recorded (in search_sort.auto)', () => {
    assert(
      Date.now() < +new Date('2025-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
