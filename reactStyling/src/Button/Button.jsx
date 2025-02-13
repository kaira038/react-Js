// import Styles from './Button.module.css'

function Button(){

    const style={
        backgroundColor: "hsl(195, 51%, 54%)",
        border: "none",
        fontSize: "2rem",
        color: "white",
        padding: "8px 20px",
        margin: "5px",
        fontWeight: "bold",
        borderRadius: "12px",
        boxShadow:"4px 4px 4px rgb(68, 67, 67)"
      } 

    return(
        // <button className="button">Click me</button>  //1.External
        //<button className={styles.button}>Click me</button>; //2.module
        <button style={style}>Click me</button>  //3.Inline
    );

}

export default Button