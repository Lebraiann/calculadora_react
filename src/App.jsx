import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.header}>Calculadora :D</h1>
      </div>
      <div style={styles.calculator}>
        <input type="text" value={input} readOnly style={styles.display} />
        <div style={styles.buttonContainer}>
          <button onClick={() => handleClick("7")} style={styles.button}>
            7
          </button>
          <button onClick={() => handleClick("8")} style={styles.button}>
            8
          </button>
          <button onClick={() => handleClick("9")} style={styles.button}>
            9
          </button>
          <button onClick={() => handleClick("/")} style={styles.button}>
            /
          </button>

          <button onClick={() => handleClick("4")} style={styles.button}>
            4
          </button>
          <button onClick={() => handleClick("5")} style={styles.button}>
            5
          </button>
          <button onClick={() => handleClick("6")} style={styles.button}>
            6
          </button>
          <button onClick={() => handleClick("*")} style={styles.button}>
            *
          </button>

          <button onClick={() => handleClick("1")} style={styles.button}>
            1
          </button>
          <button onClick={() => handleClick("2")} style={styles.button}>
            2
          </button>
          <button onClick={() => handleClick("3")} style={styles.button}>
            3
          </button>
          <button onClick={() => handleClick("-")} style={styles.button}>
            -
          </button>

          <button onClick={() => handleClick("0")} style={styles.button}>
            0
          </button>
          <button onClick={() => handleClick(".")} style={styles.button}>
            .
          </button>
          <button onClick={handleEvaluate} style={styles.button}>
            =
          </button>
          <button onClick={() => handleClick("+")} style={styles.button}>
            +
          </button>
        </div>
        <div style={styles.controlButtons}>
          <button onClick={handleClear} style={styles.controlButton}>
            C
          </button>
          <button onClick={handleDelete} style={styles.controlButton}>
            DEL
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  calculator: {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "260px",
  },
  display: {
    width: "100%",
    height: "40px",
    textAlign: "right",
    fontSize: "24px",
    marginBottom: "20px",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "20px",
    fontSize: "18px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  controlButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  controlButton: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#ff5c5c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default App;
