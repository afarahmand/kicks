import { connect } from 'react-redux';
import DiscoverPage from './discover_page';

const mapStateToProps = state => ({
  categories: state.entities.categories
});

const mapDispatchToProps = dispatch => ({  
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
