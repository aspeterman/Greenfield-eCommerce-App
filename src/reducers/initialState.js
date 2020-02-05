// var reduxPromise = require("redux-promise")

//regular
//___________________________________________________________________
// const initialState =  axios.get("http://52.26.193.201:3000/products/list").then((something)=>{ console.log(something['data']); return something['data']})


//send function
//___________________________________________________________________
// const initialState = () => { axios.get("http://52.26.193.201:3000/products/list").then((something)=> something)}



//async function
//___________________________________________________________________
// async function initialState() {
// let some = await axios.get("http://52.26.193.201:3000/products/list")
// return some
// }



//setting it to a new value
//___________________________________________________________________
// const initialState;
//const getData = () => {
// axios.get("http://52.26.193.201:3000/products/list").then(something => initialState = something)
// }



//export default  initialState
//___________________________________________________________________
//  const initialState = fetch('http://52.26.193.201:3000/products/list')
//   .then((response) => {
//     return response.json();
//   })
//   .then((something) => {
//     console.log(something);
//   });



//Redux promises
//__________________________________________________________________
// const initialState = createAction('FETCH_THING', async id => {
//   const result = await axios.get("http://52.26.193.201:3000/products/list")
//   return result;
// });

//__________________________________________
//  export default  axios.get("http://52.26.193.201:3000/products/list").then(something =>{ console.log(something);return something['data']})
//
// const wait = () => axios.get("http://52.26.193.201:3000/products/list")
// async function foo() {
//     console.log('called')
//     var cool = await wait()
//     return cool['data']
// }

// export default foo()




//_____example data _______________________
const initialState = {
    //------------------------------------------------------
    name: '',
    cart: [],
    products: [
        {
            id: 1,
            reviewList: {},
            reviewAfter: {1: '', 2: ''},
        ratings: [{
            fit: 1,
            style: 1,
            overall: 1,
        }],
        name: 'Nike',
        price: 3000,
        questions :[{
            "results": [
                {
                    "question_id": 5,
                    "question_body": "Can I wash it?",
                    "question_date": "2018-02-08T00:00:00.000Z",
                    "asker_name": "cleopatra",
                    "question_helpfulness": 28,
                    "reported": 0,
                    "answers": {
                        "46": {
                            "id": 46,
                            "body": "I've thrown it in the wash and it seems fine",
                            "date": "2018-02-08T00:00:00.000Z",
                            "answerer_name": "marcanthony",
                            "helpfulness": 8,
                            "photos": []
                        },
                        "64": {
                            "id": 64,
                            "body": "It says not to",
                            "date": "2018-03-08T00:00:00.000Z",
                            "answerer_name": "ceasar",
                            "helpfulness": 0,
                            "photos": []
                        },
                        "96": {
                            "id": 96,
                            "body": "I wouldn't machine wash it",
                            "date": "2018-03-08T00:00:00.000Z",
                            "answerer_name": "ceasar",
                            "helpfulness": 0,
                            "photos": []
                        },
                        "101": {
                            "id": 101,
                            "body": "Only if you want to ruin it!",
                            "date": "2018-03-08T00:00:00.000Z",
                            "answerer_name": "ceasar",
                            "helpfulness": 6,
                            "photos": []
                        },
                        "107": {
                            "id": 107,
                            "body": "Yes",
                            "date": "2018-03-08T00:00:00.000Z",
                            "answerer_name": "Seller",
                            "helpfulness": 4,
                            "photos": []
                        },
                        "124794": {
                            "id": 124794,
                            "body": "The cake is a lie!",
                            "date": "2019-10-21T00:00:00.000Z",
                            "answerer_name": "Rolf",
                            "helpfulness": 0,
                            "photos": []
                        },
                        "124795": {
                            "id": 124795,
                            "body": "the cake is a lie!",
                            "date": "2019-10-21T00:00:00.000Z",
                            "answerer_name": "turkeyboi",
                            "helpfulness": 0,
                            "photos": []
                        }
                    }
                },
                {
                    "question_id": 4,
                    "question_body": "How long does it last?",
                    "question_date": "2019-07-06T00:00:00.000Z",
                    "asker_name": "funnygirl",
                    "question_helpfulness": 21,
                    "reported": 0,
                    "answers": {
                        "65": {
                            "id": 65,
                            "body": "It runs small",
                            "date": "2019-11-17T00:00:00.000Z",
                            "answerer_name": "dschulman",
                            "helpfulness": 1,
                            "photos": [
                                "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                                "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                            ]
                        }
                    }
                },
                {
                    "question_id": 3,
                    "question_body": "Does this product run big or small?",
                    "question_date": "2019-01-17T00:00:00.000Z",
                    "asker_name": "jbilas",
                    "question_helpfulness": 15,
                    "reported": 0,
                    "answers": {}
                },
                {
                    "question_id": 1,
                    "question_body": "What fabric is the top made of?",
                    "question_date": "2018-01-04T00:00:00.000Z",
                    "asker_name": "yankeelover",
                    "question_helpfulness": 6,
                    "reported": 0,
                    "answers": {
                        "5": {
                            "id": 5,
                            "body": "Something pretty soft but I can't be sure",
                            "date": "2018-01-04T00:00:00.000Z",
                            "answerer_name": "metslover",
                            "helpfulness": 5,
                            "photos": [
                                "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                                "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                                "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
                            ]
                        },
                        "7": {
                            "id": 7,
                            "body": "Its the best! Seriously magic fabric",
                            "date": "2018-01-04T00:00:00.000Z",
                            "answerer_name": "metslover",
                            "helpfulness": 7,
                            "photos": []
                        },
                        "8": {
                            "id": 8,
                            "body": "DONT BUY IT! It's bad for the environment",
                            "date": "2018-01-04T00:00:00.000Z",
                            "answerer_name": "metslover",
                            "helpfulness": 8,
                            "photos": []
                        },
                        "95": {
                            "id": 95,
                            "body": "Supposedly suede, but I think its synthetic",
                            "date": "2018-12-04T00:00:00.000Z",
                            "answerer_name": "metslover",
                            "helpfulness": 3,
                            "photos": []
                        }
                    }
                },
                {
                    "question_id": 35453,
                    "question_body": "Does this test work?",
                    "question_date": "2019-10-18T00:00:00.000Z",
                    "asker_name": "Axel",
                    "question_helpfulness": 0,
                    "reported": 0,
                    "answers": {}
                }
            ],
        }],

        imageUrl: require('../assets/images/Nike.jpg')
        },
        {
        id: 2,
        reviewList: {},
        reviewAfter: {1: '', 2: ''},
        name: 'Socialite',
        price: 1000,
        questions: [{
            "results":[{
                "question_id": 35453,
                "question_body": "Does this test work?",
                "question_date": "2019-10-18T00:00:00.000Z",
                "asker_name": "Axel",
                "question_helpfulness": 0,
                "reported": 0,
                "answers": {
                    "5": {
                        "id": 5,
                        "body": "Something pretty soft but I can't be sure",
                        "date": "2018-01-04T00:00:00.000Z",
                        "answerer_name": "metslover",
                        "helpfulness": 5,
                        "photos": [
                            "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                            "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                            "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
                        ]
                    },
                }
            }]
        }],
        ratings: [{
            fit: 1,
            style: 1,
            overall: 1,
        }],
        imageUrl: require('../assets/images/Socialite.jpg')
        },
        {
        id: 3,
        name: 'Denim',
        questions: [{
            "results":[{

                    "question_id": 35453,
                    "question_body": "Does this test work?",
                    "question_date": "2019-10-18T00:00:00.000Z",
                    "asker_name": "Axel",
                    "question_helpfulness": 0,
                    "reported": 0,
                    "answers": {"5": {
                        "id": 5,
                        "body": "Something pretty soft but I can't be sure",
                        "date": "2018-01-04T00:00:00.000Z",
                        "answerer_name": "metslover",
                        "helpfulness": 5,
                        "photos": [
                            "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                            "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                            "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
                        ]
                    }},

            }]
        }],

        price: 10,
        reviewList: {},
        reviewAfter: {1: '', 2: ''},
        ratings: [{
            fit: 1,
            style: 1,
            overall: 1,
        }],
        imageUrl: require('../assets/images/Denim.jpg')
        }
    ],


}
export default  initialState