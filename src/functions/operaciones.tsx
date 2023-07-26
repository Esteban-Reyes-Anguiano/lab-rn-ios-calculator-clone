export const sumar = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  
  export const restar = (num1: number, num2: number): number => {
    return num1 - num2;
  };
  
  export const multiplicar = (num1: number, num2: number): number => {
    return num1 * num2;
  };
  
  export const dividir = (num1: number, num2: number): number => {
    if (num2 === 0) {
      throw new Error('No se puede dividir por cero.');
    }
    return num1 / num2;
  };
  