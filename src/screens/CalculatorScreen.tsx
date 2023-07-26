import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacityComponent } from 'react-native';

import Button from '../components/Button';
import Display from '../components/Display';

import { colors } from '../styles/colors';
import { sumar, restar, multiplicar, dividir } from '../functions/operaciones';

let num1: number;
let num2: number;

const CalculatorScreen = () => {
  const [display, setDisplay] = useState<number | string>(0);
  const [operacion, setOperacion] = useState<string>('');
  const [shouldConcatenateDigit, setShouldConcatenateDigit] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<number | null>(null);

  const concatenarDigitos = (digit: string) => {
    if (shouldConcatenateDigit) {
      setDisplay(data => data + digit);
    } else {
      setDisplay(digit);
      setShouldConcatenateDigit(true);
    }
  };
  const activateOperation = (op: string) => {
    num1 = Number(display);
    setShouldConcatenateDigit(false);
    setOperacion(op);
  };
  const BotonCancelar = () => {
    if (!shouldConcatenateDigit && display === 0) {
      setOperacion('');
    }
    setDisplay(0);
    setShouldConcatenateDigit(false);
  };
  const agregarPunto = () => {
    if (Math.round(display as number) === Number(display)) {
      setDisplay(prevDisplay => `${prevDisplay}.`);
      setShouldConcatenateDigit(true);
    }
  };
  const Borrar = () => {
    const displayNumber = typeof display === 'number' ? display : Number(display);
    setDisplay(display.toLocaleString().substring(0, display.toString().length - 1));

  };
  const resultadoFinal = () => {
    num2 = Number(display);

    let result: number;
    switch (operacion) {

      case 'multiplicacion':
        result = multiplicar(num1, num2);
        break;
      case 'suma':
        result = sumar(num1, num2);
        break;
      case 'resta':
        result = restar(num1, num2);
        break;
      case 'division':
        result = dividir(num1, num2);
        break;
      default:
        return null;
    }

    setLastResult(result);
    setDisplay(+result.toFixed(5));
    setOperacion('');
  };
  const invertirSenial = () => {
    const displayNumber = typeof display === 'number' ? display : Number(display);
    setDisplay(displayNumber * -1);
  };
  

  return (
    <View style={styles.container}>
      {lastResult !== null && (
        <View style={styles.lastResultContainer}>
          <Text style={styles.lastResultText}>{lastResult}</Text>
        </View>
      )}

      <Display display={display as string} />
      <View style={styles.row}>
        <Button
          backgroundColor={colors.lightgray}
          color={colors.black}
          text={display ? 'C' : 'AC'}
          function={BotonCancelar}
        />
        <Button
          backgroundColor={colors.lightgray}
          color={colors.black}
          text="+/-"
          function={invertirSenial}
        />
        <Button
          backgroundColor={colors.lightgray}
          color={colors.black}
          text="Del"
          function={Borrar}
        />
        <Button
          orange
          backgroundColor={ colors.orange}
          color={colors.white}
          text="÷"
          function={() => activateOperation('division')}
        />
      </View>
      <View style={styles.row}>
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="7"
          function={() => concatenarDigitos('7')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="8"
          function={() => concatenarDigitos('8')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="9"
          function={() => concatenarDigitos('9')}
        />
        <Button
          backgroundColor={ colors.orange}
          color={colors.white}
          text="×"
          function={() => activateOperation('multiplicacion')}
        />
      </View>
      <View style={styles.row}>
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="4"
          function={() => concatenarDigitos('4')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="5"
          function={() => concatenarDigitos('5')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="6"
          function={() => concatenarDigitos('6')}
        />
        <Button
          backgroundColor={ colors.orange}
          color={colors.white}
          text="−"
          function={() => activateOperation('resta')}
        />
      </View>
      <View style={styles.row}>
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="1"
          function={() => concatenarDigitos('1')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="2"
          function={() => concatenarDigitos('2')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="3"
          function={() => concatenarDigitos('3')}
        />
        <Button
          backgroundColor={ colors.orange}
          color={colors.white}
          text="+"
          function={() => activateOperation('suma')}
        />
      </View>
      <View style={styles.row}>
        <Button
          special
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="0"
          function={() => concatenarDigitos('0')}
        />
        <Button
          backgroundColor={colors.darkGray}
          color={colors.white}
          text="."
          function={() => agregarPunto()}
        />
        <Button
          orange
          backgroundColor={colors.orange}
          color={colors.white}
          text="="
          function={() => resultadoFinal()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 9,
  },
  lastResultContainer: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginBottom: 3,
  },
  lastResultText: {
    fontSize: 35,
    color: '#ffffff75',
  },
  
});

export default CalculatorScreen;