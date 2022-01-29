#  Lazy loading React Native components from a remote server




## Problem to solve

Creating a simple solution to dynamically load remote components form a server and load that in a react native application with all the features of the native components

## Proposed Solution



### Step 1: React.lazy and Suspense

React already have a solution to help us with lazy loading of the components and we are going to make use of that in and efficient manner,React.Suspense. React.lazy takes in a promise that will resolve to a component function (or class) and returns a component that can be rendered within a <React.Suspense> component. Main aim of these components is to support dynamic imports

```
import  React,  {  Suspense  }  from  'react';
const  Component  =  React.lazy(()  =>  import('./MyComponent'));

function  MyComponent()  {
  return  (
  <View>
	  <Suspense fallback={null}>
	  <Component  />
	  </Suspense>
  </View>
  );
}
```

Lets wrap this idea of dynamic loading into a method  for writing a dynamic component  that renders our dynamic component 

```import  React,  { useMemo,  Suspense  }  from  'react';
import  {  Text,  View  }  from  'react-native';
const  DynamicComponent  =  ({ __id, children,  ...props })  =>  {
  const  Component  =  useMemo(()  =>  {
  return  React.lazy(async  ()  =>  fetchComponent(__id))
  },  [__id]);

  return  (
  <Suspense fallback={<View><Text>Loading...</Text></View>}>
  <Component  {...props}>{children}</Component>
  </Suspense>
  )
};

export  default  React.memo(DynamicComponent);
```
###  Step 2: Fetching and parsing the remote components

Main hurdles in parsing the remote components are 

1.  Javascript doesn't understand JSX. Solution is to use a module bundler and babel to transform JSX to javascript code and bundle everything together. 

2.  We'll need to use a module loader to evaluate the bundle and give us the exported component. We'll write our own basic  require  function.

4.  There has to be exactly one instance of  React  in our application (and the same might be true for some of the other libraries we use), therefore we'll need to specify all packages in node_modules as external dependencies while building the remote components. Then we need a way to provide instances of these packages to the remote components from the App's code. Since we're going to write our own version of  require, we'll write it in a way to make this possible.

Below is a version of  require  function we need to tweak  [here](https://michelenasti.com/2018/10/02/let-s-write-a-simple-version-of-the-require-function.html)

code we tweaked can be found in the repo

Now what we need is a fetch function 

```

import  {  Text  }  from  "react-native";
import  packages  from  "../packages";
export  async  function  fetchComponent(id)  {

  try  {
  const text =  await  fetch(`http://10.0.2.2:8080/${id}.js?time=${Date.now()}`).then(a  =>  {

  if  (!a.ok)  {
  throw  new  Error('Network response was not ok');
  }
  return a.text()
  });
  return  {  default:  getParsedModule(text, id, packages )  };
  }  catch  (error)  {
  console.log(error)
  return  {  default()  {  return  <Text>Failed to Render</Text>  }  }

  }

}
```


### Setting up the remote components project

Once the client side is completed we need our remote components setup ,We  choose rollup as our bundler and configured as below

```
import  babel  from  'rollup-plugin-babel'
import  commonjs  from  'rollup-plugin-commonjs'
import  resolve  from  'rollup-plugin-node-resolve'
import  { terser }  from  "rollup-plugin-terser";

const fs =  require("fs");
const pkg =  JSON.parse(require("fs")
  .readFileSync(require("path")
  .resolve('./package.json'),  'utf-8'));
const external =  Object.keys(pkg.dependencies  ||  {});
const allComponents = fs.readdirSync("./components");
const allFiles = allComponents
  .filter(a  => a.endsWith(".js"))
  .map(a  =>  `./components/${a}`)
const  getConfig  =  (file)  =>  ({
 input: file,
 output:  [{ dir:  "dist", format:  'cjs'  }],
 plugins:  [
  resolve(),
  babel(),
  commonjs(),
  terser()
  ],
 external
})

export  default allFiles.map(getConfig)
```


Instead of defining configs for each entry file, we generate configs for each file in the components folder.


## Running the project

We can build our remote component and pages project with build command found in the package.json file in the repo and once the build is completed we can serve the file in dist folder that can be consumed by our fetch function and that gets painted on the dom
