// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2202-ftb-et-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


export const fetchAllPlayers = async () => {
  try{
      let allPlayersresponse = await fetch(`${APIURL}/players`);
      let allPlayersdata = await allPlayersresponse.json();
      console.log(allPlayersdata)
      /* if I find an error in the data I get back I am going to throw the error as if it came from the code */
      if(allPlayersdata.error) throw allPlayersdata.error;
      return allPlayersdata.data.players
  } catch (error) {
      throw error;
    }
  }

  export const fetchSinglePlayer = async (playerId) => {
      try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
      } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
      }
    };
    
    export const addNewPlayer = async (playerObj) => {
      try {
        const response = await fetch(`${APIURL}/players`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(playerObj),
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
      } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
      }
    };
    
    export const removePlayer = async (playerId) => {
      try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return;
      } catch (err) {
        console.error(
          `Whoops, trouble removing player #${playerId} from the roster!`,
          err
        );
      }
    };