const WithCalculate = (data, comp) => {
    const output = [];
    for(let i = 0; i < data.length; i++){
        output.push(comp(data[i]));
    }
    return(output);
}

export default WithCalculate;
