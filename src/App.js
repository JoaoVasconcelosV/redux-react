import { connect } from 'react-redux';

function App(props) {
  return (
    <ul>
      {props.courses.map((course, index) =>
        <li key={index}>{course}</li>
      )}      
    </ul>
  );
}

const mapStateProps = (state) => ({
  courses: state.data
})

export default connect(mapStateProps)(App);