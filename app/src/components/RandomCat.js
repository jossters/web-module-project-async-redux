import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchData} from "../store";

const RandomCat = (props) => {
    const { fetchData } = props;
      useEffect(() => {
    fetchData();
  }, [fetchData]);

return (
    <div>
     {props.isLoading ? <h3>Loading data...</h3> : null}
     {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
     
        <img alt="cat" src = {props.cat.url}/>
      
    </div>
)
}

const mapStateToProps = (state) => {
    return{
        isLoading: state.isLoading,
        cat: state.cat,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchData })(RandomCat);