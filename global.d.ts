declare module '*.module.css' {
  const styles: { 
    readonly [className: string]: string;
      define: {
    'process.env': {}, // щоб не було помилок із Node-перемінними
  }
  };
  export default styles;
}