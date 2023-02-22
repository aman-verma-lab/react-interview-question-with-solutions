import withCalculate from "../Hoc/withCalculate";

const Add = (args) => args + 2;

export default withCalculate([2, 4, 6, 8], Add);