import {useState, useRef} from 'react';
const TakingInput = () =>{
    const [color, setColor] = useState({curr_color: "#800080"});
    const colorBlock = useRef(null);
    const changeColor = (color) =>{
        //document.getElementById('colorBlock').style.backgroundColor = color.giveColor;
        colorBlock.current.backgroundColor = color.giveColor;
    }
    const handleChange = e =>{
        setColor({
            [e.target.name]: e.target.value
        });
        changeColor(color);
    };
        
    return(
        <section id="takingInput" className="container p-4 text-center">
            <h1>Taking input and dynamic changes with useState</h1>
            <div className="container p-3 ">
                <br/>
                <input 
                    id="giveColor" 
                    name="giveColor" 
                    className="form-control" 
                    onChange={handleChange} 
                    value={color.curr_color} 
                    placeholder="#800080" 
                    style={{borderRadius:"20px", border:"2px solid purple"}}
                />
                <br/>
                <h4>The block below will change color to the HEX value in the input!</h4>
                <small className="text-danger">There is no validation so please don't expect invalid inputs to show anything</small>
                <br/>
                <small className="text-info">Just hit a space at the end :)</small>
                <br/>
                <br/>
                <span className="text-center col-4 col-sm-12 p-2" style={{height: "10vh",}}>
                    <div className="container m-4 p-4 text-center" ref={colorBlock} style={{backgroundColor: "#800080",borderRadius: "20px", border:"2px solid white"}}>
                        <h2 className="display-4" id="givenColor" style={{fontSize: "2rem", fontWeight:"900", color: "white"}}>{color.curr_color}</h2>
                    </div>
                </span>
            </div>
        </section>
    );
}

export default TakingInput;




const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }