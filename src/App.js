import { data } from './data';
import { Card } from './component/card';
import './rep.css';





export const App =() =>{
 return <div className="container">{data.map(Card)}</div>;
};