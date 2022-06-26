import Card from "../shared/Card";
import { Link } from 'react-router-dom'


function AboutPage() {
    return ( 
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>An app about feedback in React</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>
            About Page
        </Card>
     );
}

export default AboutPage;