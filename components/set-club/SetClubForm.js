import React from 'react';
import BasicButton from '../ui/BasicButton';
import BasicAlert from '../ui/BasicAlert';
import BasicSelect from '../ui/BasicSelect';
import BasicSnackbar from '../ui/BasicSnackbar';
import { addDoc, collection } from 'firebase/firestore';
import AuthContext from '../../context/Auth/auth-context';
import { db } from '../../firebase.config';
import { useRouter } from 'next/router';

export default function SetClubForm() {
  const { user } = React.useContext(AuthContext);
  const router = useRouter();
  const leagueInfo = [{ value: 39, text: 'Premier League' }];
  const [league] = React.useState(leagueInfo);
  const [leagueValue, setLeagueValue] = React.useState('');
  const [clubs, setClubs] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [formError, setFormError] = React.useState();
  const [selectedClub, setSelectedClub] = React.useState('');
  const [errors, setErrors] = React.useState({
    league: { hasError: false, error: null },
    club: { hasError: false, error: null },
  });

  const getClubs = async e => {
    setLeagueValue(e.target.value);
    if (errors.league.hasError) {
      setErrors(prev => {
        return { ...prev, league: { hasError: false, error: null } };
      });
    }
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '915f65df84msh2ef701f1718c032p1f5431jsnfed3d971dc76',
      },
    };
    const res = await fetch(
      'https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2021',
      options
    );
    const data = await res.json();
    const convertedClubData = data?.response?.map(club => {
      return { value: club.team.id, text: club.team.name };
    });
    setClubs(convertedClubData);
  };
  const getSelectedClub = e => {
    if (errors.club.hasError) {
      setErrors(prev => {
        return { ...prev, club: { hasError: false, error: null } };
      });
    }
    setSelectedClub(e.target.value);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const submitHandler = async e => {
    e.preventDefault();
    setFormError();
    if (leagueValue === '') {
      setErrors(prev => {
        return { ...prev, league: { hasError: true, error: 'Select league' } };
      });
    }
    if (selectedClub === '') {
      setErrors(prev => {
        return { ...prev, club: { hasError: true, error: 'Select Club' } };
      });
    }

    try {
      await addDoc(collection(db, 'users'), {
        user: user.uid,
        club: Number(selectedClub),
      });
      setOpen(true);
      router.push('/');
    } catch (e) {
      setFormError('Error adding document');
    }
  };

  return (
    <>
      <BasicSnackbar
        handleClose={handleClose}
        open={open}
        message="Saved Successfully!"
      />
      {formError && (
        <BasicAlert
          message={formError}
          type="error"
          sx={{ marginBottom: '1rem' }}
        />
      )}
      <form onSubmit={submitHandler}>
        <BasicSelect
          label="League"
          id="league"
          sx={{ marginBottom: '1rem' }}
          fields={league}
          value={leagueValue}
          handleChange={getClubs}
          hasError={errors.league.hasError}
          errorText={errors.league.error}
        />
        <BasicSelect
          label="Club"
          id="club"
          sx={{ marginBottom: '1rem' }}
          fields={clubs}
          handleChange={getSelectedClub}
          value={selectedClub}
          hasError={errors.club.hasError}
          errorText={errors.club.error}
        />
        <BasicButton type="submit" variant="outlined">
          Save
        </BasicButton>
      </form>
    </>
  );
}
