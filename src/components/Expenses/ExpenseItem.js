import './ExpenseItem.css';
import ExpenseData from './ExpenseData';
import Card from '../UI/Card';
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
        <ExpenseData date={props.date}></ExpenseData>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
  );
}

export default ExpenseItem;