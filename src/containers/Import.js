// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import';
import { fetchMakes } from '../redux/actions'
import { removeMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        removeMake: (makeId) => dispatch(removeMake(makeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)
