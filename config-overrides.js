
// module.exports = function override(config, env) {
//     // find ts loader in config, and load babel before it
//     // console.log(JSON.stringify(config.module.rules[1].oneOf, null ,2))
//     console.error(JSON.stringify(config.module.rules[1].oneOf, null, 2));
//     config.module.rules[1].oneOf[1].use.unshift({
//       loader: require.resolve("babel-loader")
//     });
  
//     return config;
//   };

