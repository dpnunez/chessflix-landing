import {
  Grid, Typography, Divider, IconButton,
} from '@mui/material';
import { teachers } from 'constantsProject';
import { Facebook as FacebookIcon, YouTube as YoutubeIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import { Container, Card } from './styles';

const Teachers = () => (
  <Container>
    <Typography variant="h2" className="section-title">Nossos professores</Typography>
    <Grid container spacing={4} width="100%" mt="1rem" className="grid-container">
      {teachers.map((teacher) => (
        <Grid item key={teacher.name} xs={4}>
          <Card image={teacher.image} elevation={12}>
            <Typography variant="h3" className="name">{teacher.name}</Typography>
            <Typography variant="h4" className="title">{teacher.title}</Typography>
            <Divider className="divider" />
            <div className="socials">
              {teacher.socials?.facebook && (
              <IconButton target="_blank" href={teacher.socials?.facebook}>
                <FacebookIcon />
              </IconButton>
              )}

              {teacher.socials?.youtube && (
              <IconButton target="_blank" href={teacher.socials?.youtube}>
                <YoutubeIcon />
              </IconButton>
              )}

              {teacher.socials?.instagram && (
              <IconButton target="_blank" href={teacher.socials?.instagram}>
                <InstagramIcon />
              </IconButton>
              )}

              {teacher.socials?.twitch && (
              <IconButton target="_blank" href={teacher.socials?.twitch}>
                <FacebookIcon />
              </IconButton>
              )}
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export { Teachers };
