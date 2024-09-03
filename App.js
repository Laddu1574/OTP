import logo from './logo.svg';
import './App.css';
import {Functional} from './components/Functional';
import Class from './components/Class';
import Hello from './components/FC with jsx';
import Hi from './components/FC without jsx';
import Props from './components/Props FC';
import Prop from './components/Props CC';
import State from './components/State CC';
import Count from './components/Count';
import Destructuring from './components/Destructuring props FC 1';
import Destruct from './components/Destructuring prop FC 2';
import Des from './components/Destructuring prop CC ';
import FunctionClick from './components/FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import IfElse from './components/IfElse';
import Elementvariable from './components/Elementvariable';
import Ternary from './components/Ternary';
import ShortCircuit from './components/ShortCircuit';
import NameList from './components/NameListMAP';
import IndexAsKey from './components/IndexAsKey';
import StyleSheet from './components/StyleSheet';
import InLine from './components/InLine';
import styles from './appStyles.module.css'
import FormComponents from './components/FormComponents';
import LifecycleMountA from './components/LifecycleMountA';
import LifecycleUpdateA from './components/LifecycleUpdateA';
import Fragment from './components/Fragment';
import ParentComp from './components/ParentComp';
import Refs from './components/Refs';
import RefFocusInput from './components/RefFocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Otp from './components/Otp';
import ImageGenerator from './components/ImageGenerator/ImageGenerator';

function App() {
  return (
    <div className="App">
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Functional />
      <Class />
      <Hello />
      <Hi /> */}
      {/* <Props name="Saritha" heroname="spiderman">
        <p>This is children prop</p>
      </Props>
      <Props name="Raghu" heroname="Batman">
        <button>Action</button>
      </Props>
      <Props name="Raju" heroname="Superman">
        <input type='text'></input>
      </Props>
      <Prop name="Laddu" heroname="antman"/>
      <Prop name="Jash" heroname="prabhas"/>
      <Prop name ="Jag" heroname="Mahesh"/> */}
    {/* <State /> */}
    {/* <Count /> */}
    {/* <Destructuring name= "Laddu" heroname="Mahesh babu"></Destructuring> */}
    {/* <Destruct name= "Laddu" heroname="Mahesh babu"></Destruct> */}
    {/* <Des name='Laddu' heroname='Mahesh'></Des> */}
    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
    {/* <EventBind /> */}
    {/* <ParentComponent /> */}
    {/* <IfElse /> */}
    {/* <Elementvariable /> */}
    {/* <Ternary /> */}
    {/* <ShortCircuit /> */}
    {/* <NameList /> */}
    {/* <IndexAsKey /> */}
    {/* <StyleSheet primary={true}/> */}
    {/* <InLine /> */}
    {/* <FormComponents /> */}
    {/* <LifecycleMountA /> */}
    {/* <LifecycleUpdateA /> */}
    {/* <Fragment />  */}
    {/* <ParentComp /> */}
    {/* <Refs /> */}
    {/* <RefFocusInput /> */}
    {/* <FRParentInput /> */}
    {/* <PortalDemo /> */}
    {/* <ErrorBoundary >
    <Hero heroname="Batman" />
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero heroname="Superman" />
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero heroname="Joker" />
    </ErrorBoundary> */}
    {/* <ClickCounter />
    <HoverCounter /> */}

    {/* <Counter>
    {(count,incrementCount) =>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}
    </Counter>  
    <Counter>
     {(count,incrementCount) =>(
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}
    </Counter>  */}
    <Otp />  
    {/* <ImageGenerator/> */}
    </div>
  );
}

export default App;