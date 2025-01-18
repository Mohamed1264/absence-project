
import 'bootstrap/dist/css/bootstrap.min.css';
import './BarChart.css' // Custom styles for professional appearance

const BarChart = ({ data }) => {
    return (
        <div className="barchart-container">
            <div className="d-flex mx-auto barchart-row">
                {data.map((item, index) => (
                    <div key={index} className=" d-flex flex-column justify-content-end align-items-center text-center" style={{height:'100%',width:'100%'}}>
                        <div className="value">{item.value}%</div>
                        <div className="bar" style={{ height: `${item.value}%` ,width: `100%`}}>
                           
                        </div>
                        <div className="label text-uppercase">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarChart;
