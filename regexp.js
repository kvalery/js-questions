window.onload = function any_function_name() {
  var data =[
  {
    "index": 0,
    "child": "SU-2",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 1,
    "child": "SU-3",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 2,
    "child": "SU-2",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 3,
    "paret": "SU-1",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 4,
    "paret": "SU-3",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 5,
    "paret": "SU-2",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 6,
    "child": "SU-1",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 7,
    "child": "SU-1",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 8,
    "child": "SU-3",
    "data": "<ReferenceError: data is not defined>"
  },
  {
    "index": 9,
    "child": "SU-3",
    "data": "<ReferenceError: data is not defined>"
  }
];

  var newData = [];
  var mapData = [];

  data.sort(function (a, b) {
    if (!a.paret && b.paret){
      b.subChild = [];
      return 1
    };
    if (a.paret && !b.paret){
       a.subChild = [];
      return -1;
    };
  });

  for (var i = 0; i < data.length; i++) {
    if(data[i].paret){
      mapData.push(data[i].paret)
      newData.push(data[i])
    }
    if(data[i].child){
      newData[mapData.indexOf(data[i].child)].subChild.push(data[i]);
    }
  }

  console.log(newData)
  // console.log(data)

};


// good!
// var test = function (id) {
//   var newData = [];
//   data.forEach(function(item, i) {
//     if (item.child === id ){
//       newData.push(item)
//     }
//   });
//   return newData;
// };
//
// var newData = data.filter( function (item) {
//     return item.paret && (item.subChild = test(item.paret));
// });

// good!
// var newData = [];
// var mapData = [];
//
// data.sort(function (a, b) {
//   if (!a.paret && b.paret){
//     b.subChild = [];
//     return 1
//   };
//   if (a.paret && !b.paret){
//     a.subChild = [];
//     return -1;
//   };
// });
//
// for (var i = 0; i < data.length; i++) {
//   if(data[i].paret){
//     mapData.push(data[i].paret)
//     newData.push(data[i])
//   }
//   if(data[i].child){
//     newData[mapData.indexOf(data[i].child)].subChild.push(data[i]);
//   }
// }