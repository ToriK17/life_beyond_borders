import React from 'react';
import {
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg
} from '@ionic/react';
import './seeking-work.scss';

interface ProfileCardProps {
  picture: string;
  name: string;
  services: string;
  languages: string;
  transportation: string;
  location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  picture, name, services, languages, transportation, location
}) => (
  <IonCard>
    <IonImg src={picture} />
    <IonCardHeader>
      <IonCardTitle>{name}</IonCardTitle>
      <IonCardSubtitle>{services}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      Languages: {languages}<br />
      Transportation: {transportation}<br />
      Location: {location}
    </IonCardContent>
  </IonCard>
);

// Example profile data
const profileData = [
  {
    picture: '/path/to/image1.jpg',
    name: 'John Doe',
    services: 'Graphic Design',
    languages: 'English, Spanish',
    transportation: 'Owns a vehicle',
    location: 'New York, NY'
  },
];

const SeekingWork: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Seeking Work</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {profileData.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SeekingWork;
