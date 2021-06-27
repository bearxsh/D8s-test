(self.webpackChunk=self.webpackChunk||[]).push([[3471],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,c=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return a?r.createElement(c,i(i({ref:t},p),{},{components:a})):r.createElement(c,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7853:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],s={id:"organizing-state",title:"Organizing State",sidebar_label:"Organizing State"},l="Redux FAQ: Organizing State",u={unversionedId:"faq/organizing-state",id:"faq/organizing-state",isDocsHomePage:!1,title:"Organizing State",description:"Table of Contents",source:"@site/../docs/faq/OrganizingState.md",sourceDirName:"faq",slug:"/faq/organizing-state",permalink:"/faq/organizing-state",version:"current",frontMatter:{id:"organizing-state",title:"Organizing State",sidebar_label:"Organizing State"},sidebar:"docs",previous:{title:"Reducers",permalink:"/faq/reducers"},next:{title:"Store Setup",permalink:"/faq/store-setup"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Organizing State",id:"organizing-state",children:[{value:"Do I have to put all my state into Redux? Should I ever use React&#39;s <code>setState()</code>?",id:"do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate",children:[]},{value:"Can I put functions, promises, or other non-serializable items in my store state?",id:"can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state",children:[]},{value:"How do I organize nested or duplicate data in my state?",id:"how-do-i-organize-nested-or-duplicate-data-in-my-state",children:[]},{value:"Should I put form state or other UI state in my store?",id:"should-i-put-form-state-or-other-ui-state-in-my-store",children:[]}]}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-faq-organizing-state"},"Redux FAQ: Organizing State"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#redux-faq-organizing-state"},"Redux FAQ: Organizing State"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#organizing-state"},"Organizing State"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate"},"Do I have to put all my state into Redux? Should I ever use React's ",(0,o.kt)("inlineCode",{parentName:"a"},"setState()"),"?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state"},"Can I put functions, promises, or other non-serializable items in my store state?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-1"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-do-i-organize-nested-or-duplicate-data-in-my-state"},"How do I organize nested or duplicate data in my state?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-2"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#should-i-put-form-state-or-other-ui-state-in-my-store"},"Should I put form state or other UI state in my store?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-3"},"Further Information"))))))))),(0,o.kt)("h2",{id:"organizing-state"},"Organizing State"),(0,o.kt)("h3",{id:"do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate"},"Do I have to put all my state into Redux? Should I ever use React's ",(0,o.kt)("inlineCode",{parentName:"h3"},"setState()"),"?"),(0,o.kt)("p",null,"There is no \u201cright\u201d answer for this. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as \u201cis this dropdown currently open\u201d, inside a component's internal state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Using local component state is fine")),". As a developer, it is ",(0,o.kt)("em",{parentName:"p"},"your")," job to determine what kinds of state make up your application, and where each piece of state should live. Find a balance that works for you, and go with it."),(0,o.kt)("p",null,"Some common rules of thumb for determining what kind of data should be put into Redux:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do other parts of the application care about this data?"),(0,o.kt)("li",{parentName:"ul"},"Do you need to be able to create further derived data based on this original data?"),(0,o.kt)("li",{parentName:"ul"},"Is the same data being used to drive multiple components?"),(0,o.kt)("li",{parentName:"ul"},"Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?"),(0,o.kt)("li",{parentName:"ul"},"Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?"),(0,o.kt)("li",{parentName:"ul"},"Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?")),(0,o.kt)("p",null,"There are a number of community packages that implement various approaches for storing per-component state in a Redux store instead, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tomchentw/redux-component"},"redux-component"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/threepointone/redux-react-local"},"redux-react-local"),", and more. It's also possible to apply Redux's principles and concept of reducers to the task of updating local component state as well, along the lines of ",(0,o.kt)("inlineCode",{parentName:"p"},"this.setState( (previousState) => reducer(previousState, someAction))"),"."),(0,o.kt)("h4",{id:"further-information"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://changelog.com/posts/when-and-when-not-to-reach-for-redux"},"When (and when not) to reach for Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@adamrackis/finding-state-s-place-with-react-and-redux-e9a586630172"},"Finding ",(0,o.kt)("inlineCode",{parentName:"a"},"state"),"'s place with React and Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@zackargyle/a-case-for-setstate-1f1c47cd3f73"},"A Case for setState")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c"},"How to handle state in React: the missing FAQ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.freecodecamp.com/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00"},"Where to Hold React Component Data: state, store, static, and this")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://jamesknelson.com/5-types-react-application-state/"},"The 5 Types of React Application State")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5"},"Shape Your Redux Store Like Your Database"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/159"},"#159: Investigate using Redux for pseudo-local component state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1098"},"#1098: Using Redux in reusable React component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1287"},"#1287: How to choose between Redux's store and React's state?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1385"},"#1385: What are the disadvantages of storing all your state in a single immutable atom?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/749710501916139520"},"Twitter: Should I keep something in React component state?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/736310245945933824"},"Twitter: Using a reducer to update a component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discuss.reactjs.org/t/redux-and-global-state-vs-local-state/4187"},"React Forums: Redux and global state vs local state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/4w04to/when_using_redux_should_all_asynchronous_actions/d63u4o8"},'Reddit: "When should I put something into my Redux store?"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35664594/redux-why-is-state-all-in-one-place-even-state-that-isnt-global"},"Stack Overflow: Why is state all in one place, even state that isn't global?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35328056/react-redux-should-all-component-states-be-kept-in-redux-store"},"Stack Overflow: Should all component state be kept in Redux store?"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Libraries")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/component-state.md"},"Redux Addons Catalog: Component State"))),(0,o.kt)("h3",{id:"can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state"},"Can I put functions, promises, or other non-serializable items in my store state?"),(0,o.kt)("p",null,"It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's ",(0,o.kt)("em",{parentName:"p"},"technically")," possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging."),(0,o.kt)("p",null,"If you are okay with things like persistence and time-travel debugging potentially not working as intended, then you are totally welcome to put non-serializable items into your Redux store. Ultimately, it's ",(0,o.kt)("em",{parentName:"p"},"your")," application, and how you implement it is up to you. As with many other things about Redux, just be sure you understand what tradeoffs are involved."),(0,o.kt)("h4",{id:"further-information-1"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1248"},"#1248: Is it ok and possible to store a react component in a reducer?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1279"},"#1279: Have any suggestions for where to put a Map Component in Flux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1390"},"#1390: Component Loading")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1407"},"#1407: Just sharing a great base class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1793"},"#1793: React Elements in Redux State"))),(0,o.kt)("h3",{id:"how-do-i-organize-nested-or-duplicate-data-in-my-state"},"How do I organize nested or duplicate data in my state?"),(0,o.kt)("p",null,"Data with IDs, nesting, or relationships should generally be stored in a \u201cnormalized\u201d fashion: each object should be stored once, keyed by ID, and other objects that reference it should only store the ID rather than a copy of the entire object. It may help to think of parts of your store as a database, with individual \u201ctables\u201d per item type. Libraries such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paularmstrong/normalizr"},"normalizr")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tommikaikkonen/redux-orm"},"redux-orm")," can provide help and abstractions in managing normalized data."),(0,o.kt)("h4",{id:"further-information-2"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-6-async-logic"},"Redux Fundamentals: Async Logic and Data Flow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-7-standard-patterns"},"Redux Fundamentals: Standard Redux Patterns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/introduction/examples#real-world"},"Examples: Real World example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/prerequisite-concepts#normalizing-data"},"Using Redux: Structuring Reducers - Prerequisite Concepts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/normalizing-state-shape"},"Using Redux: Structuring Reducers - Normalizing State Shape")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/tree/master/examples/tree-view"},"Examples: Tree View"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://somebody32.github.io/high-performance-redux/"},"High-Performance Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f"},"Querying a Redux Store"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/316"},"#316: How to create nested reducers?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/815"},"#815: Working with Data Structures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/946"},"#946: Best way to update related state fields with split reducers?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/994"},"#994: How to cut the boilerplate when updating nested entities?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1255"},"#1255: Normalizr usage with nested objects in React/Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/pull/1269"},"#1269: Add tree view example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1824#issuecomment-228585904"},"#1824: Normalising state and garbage collection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/715507260244496384"},"Twitter: state shape should be normalized")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32798193/how-to-handle-tree-shaped-entities-in-redux-reducers"},"Stack Overflow: How to handle tree-shaped entities in Redux reducers?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux"},"Stack Overflow: How to optimize small updates to props of nested components in React + Redux?"))),(0,o.kt)("h3",{id:"should-i-put-form-state-or-other-ui-state-in-my-store"},"Should I put form state or other UI state in my store?"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate"},"same rules of thumb for deciding what should go in the Redux store")," apply for this question as well."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Based on those rules of thumb, most form state doesn't need to go into Redux"),", as it's probably not being shared between components. However, that decision is always going to be specific to you and your application. You might choose to keep some form state in Redux because you are editing data that came from the store originally, or because you do need to see the work-in-progress values reflected in other components elsewhere in the application. On the other hand, it may be a lot simpler to keep the form state local to the component, and only dispatch an action to put the data in the store once the user is done with the form."),(0,o.kt)("p",null,"Based on this, in most cases you probably don't need a Redux-based form management library either. We suggest trying these approaches, in this order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Even if the data is coming from the Redux store, start by writing your form logic by hand. It's likely this is all you'll need. (See ",(0,o.kt)("a",{parentName:"li",href:"https://goshakkk.name/on-forms-react/"},(0,o.kt)("strong",{parentName:"a"},"Gosha Arinich's posts on working with forms in React"))," for some excellent guidance on this.)"),(0,o.kt)("li",{parentName:"ul"},'If you decide that writing forms "manually" is too difficult, try a React-based form library like ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/jaredpalmer/formik"},"Formik")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/final-form/react-final-form"},"React-Final-Form"),"."),(0,o.kt)("li",{parentName:"ul"},"If you are absolutely sure you ",(0,o.kt)("em",{parentName:"li"},"must")," use a Redux-based form library because the other approaches aren't sufficient, then you may finally want to look at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/erikras/redux-form"},"Redux-Form")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/davidkpiano/react-redux-form"},"React-Redux-Form"),".")),(0,o.kt)("p",null,"If you are keeping form state in Redux, you should take some time to consider performance characteristics. Dispatching an action on every keystroke of a text input probably isn't worthwhile, and you may want to look into ",(0,o.kt)("a",{parentName:"p",href:"https://blog.isquaredsoftware.com/2017/01/practical-redux-part-7-forms-editing-reducers/"},"ways to buffer keystrokes to keep changes local before dispatching"),". As always, take some time to analyze the overall performance needs of your own application."),(0,o.kt)("p",null,"Other kinds of UI state follow these rules of thumb as well. The classic example is tracking an ",(0,o.kt)("inlineCode",{parentName:"p"},"isDropdownOpen")," flag. In most situations, the rest of the app doesn't care about this, so in most cases it should stay in component state. However, depending on your application, it may make sense to use Redux to ",(0,o.kt)("a",{parentName:"p",href:"https://blog.isquaredsoftware.com/2017/07/practical-redux-part-10-managing-modals/"},"manage dialogs and other popups"),", tabs, expanding panels, and so on."),(0,o.kt)("h4",{id:"further-information-3"},"Further Information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://goshakkk.name/on-forms-react/"},"Gosha Arinich: Writings on Forms in React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/"},"Practical Redux, Part 6: Connected Lists and Forms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/01/practical-redux-part-7-forms-editing-reducers/"},"Practical Redux, Part 7: Form Change Handling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/07/practical-redux-part-10-managing-modals/"},"Practical Redux, Part 10: Managing Modals and Context Menus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-ui-management.md"},"React/Redux Links: Redux UI Management"))))}d.isMDXComponent=!0}}]);