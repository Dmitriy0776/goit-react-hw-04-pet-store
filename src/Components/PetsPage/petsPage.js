import React from 'react';
// import PropTypes from 'prop-types';
import PetPage from '../PetPage/petPage';
import PetsJson from '../PetsJson/petsJson.json';
import styles from '../PetsPage/petsPage.module.css';

const getIdFromProps = props => props.match.params.id;

// const id = getIdFromProps(this.props);
const items = PetsJson;
const handleGoback = ({ history }) => {
  // const  = this.props;

  history.push('/pets');
};

const petsPage = ({ items }) => {
  return (
    <ul className={styles.petsPage}>
      {/* {items.map(item => ( */}
      <PetPage onGoback={handleGoback} />
      )}
    </ul>
  );
};

export default petsPage;

// key={item.id} propItem={item}

// export default class petsPage extends Component {
//   state = {
//     petsJsonArr: [],
//   };

//   componentDidMount() {
//     const id = getIdFromProps(this.props);

//     PetsJson.fetchPetWithId(id).then(petsJsonArr =>
//       this.setState({ petsJsonArr }),
//     );
//   }

//   render() {
//     const { petsJsonArr } = this.state;
//     return (
//       <ul className={styles.petsPage}>
//         {petsJsonArr && (
//           <PetPage {...petsJsonArr} onGoback={this.handleGoback} />
//         )}
//       </ul>
//     );
//   }
// }
