import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#152266",
    color: '#fff',
    fontSize: '20px',
  },
  buttonAdd: {
    backgroundColor: '#1f53e5',
    borderRadius: '5px 15px',
    border: 'none',
    padding: '10px 35px',
    color: 'white',
    margin: '10px',
    fontSize: '20px',
  },
  input:{
    backgroundColor: '#b2bdfb',
    color: '#ffffff',
    padding: '15px 5px',
    margin: '5px',
    textAlign: 'center',
    border: 'none',
  },
});