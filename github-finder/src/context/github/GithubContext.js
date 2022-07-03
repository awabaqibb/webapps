import { useReducer, createContext } from "react";
import githubReducer from './GithubReducer';


const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = "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";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users : [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //get initial users
  const searchUsers = async (text) => {
    setLoading() 

    const params= new URLSearchParams({
      q : text 
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const {items}  = await response.json();

    dispatch({
        type : 'GET_USERS',
        payload: items,
    })
    
  };

  //search for a single user
  const getUser = async (login) => {
    setLoading() 

    const response = await fetch(`${GITHUB_URL}/user/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if(response.status === 404){
      window.location = '/notfound'
    }
    
    else{

      const data = await response.json();
  
      dispatch({
          type : 'GET_USER',
          payload: data,
      })
      
    }

  };


  //set loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  //set clear
  const setClear = () => dispatch({type: 'SET_CLEAR'})

  return (
    <GithubContext.Provider value={{ users:state.users, user:state.user, loading:state.loading, searchUsers, setClear, getUser}}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;