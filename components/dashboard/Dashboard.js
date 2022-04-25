import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { db } from '../../firebase.config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Stack from '@mui/material/Stack';
import AuthContext from '../../context/Auth/auth-context';
import BasicCircularProgress from '../ui/BasicCircularProgress';
import BasicAlert from '../ui/BasicAlert';
import Typography from '@mui/material/Typography';
import BasicButton from '../ui/BasicButton';
import { Grid } from '@mui/material';
import { options } from '../../utils/options';
import SmallCard from '../ui/cards/SmallCard';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [userClub, setUserClub] = useState(39);
  const [clubData, setClubData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let q;
    const fetchData = async () => {
      const userRef = collection(db, 'users');
      if (user) {
        q = query(userRef, where('user', '==', user?.uid));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setUserClub();
        } else {
          querySnapshot.forEach(doc => {
            if (doc.data()) {
              const { club } = doc.data();
              setUserClub(club);
            }
          });
        }
      }
    };
    fetchData();
    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    if (userClub) {
      fetch(
        `https://api-football-v1.p.rapidapi.com/v3/teams?id=${userClub}&league=39&season=2021`,
        options
      )
        .then(response => response.json())
        .then(response => setClubData(response?.response))
        .catch(err => console.error(err));
    }
  }, [userClub]);

  console.log(clubData);
  return (
    <>
      {!isLoading && !userClub && (
        <BasicAlert type="warning" title="Club not set">
          <Typography variant="h6" gutterBottom>
            You have selected your club yet!
          </Typography>
          <Link href="/profile/set-club">
            <a className="no-underline">
              <BasicButton variant="outlined">
                Select your favorite club
              </BasicButton>
            </a>
          </Link>
        </BasicAlert>
      )}
      <Stack spacing={4}>
        {isLoading && <BasicCircularProgress />}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <SmallCard
              src={
                clubData[0]?.team?.logo ||
                'https://media.api-sports.io/football/leagues/39.png'
              }
              width={64}
              height={64}
              name={clubData[0]?.team?.name || 'Not defined'}
              title="My Club"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SmallCard
              src={
                clubData[0]?.venue?.image ||
                'https://media.api-sports.io/football/leagues/39.png'
              }
              width={64}
              height={64}
              name={clubData[0]?.venue?.name || 'Not defined'}
              title="Venue"
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
