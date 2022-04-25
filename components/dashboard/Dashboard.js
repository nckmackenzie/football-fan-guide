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

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [userClub, setUserClub] = useState(39);
  //   const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const userRef = collection(db, 'users');
      const q = query(userRef, where('user', '==', user?.uid));
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
    };
    fetchData();
    setIsLoading(false);
  }, [user]);

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
        <Grid container spacing={2}></Grid>
      </Stack>
    </>
  );
}
