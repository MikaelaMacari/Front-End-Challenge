import Container from "components/common/Container";
import {keyboard} from "assets/static/keyboard";
import RowsContainer from "components/common/RowsContainer";
import 'components/common/RowsContainer/index.css'


const Keyboard = () => {
    return (
        <Container>
            <RowsContainer keysArray={keyboard.main} className='main' secondaryClassName='secondaryMain'/>
            <RowsContainer keysArray={keyboard.secondary} className='secondary'
                           secondaryClassName='secondaryContainer'/>
        </Container>
    )
}
export default Keyboard