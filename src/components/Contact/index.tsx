import {
  Button,
  Grid, IconButton, TextField, Typography,
} from '@mui/material';
import { Mail as MailIcon, LocationOn as PointIcon } from '@mui/icons-material';
import { chessFlixSocials } from 'constantsProject';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { Container } from './styles';

const Contact = () => {
  const { control } = useForm();

  return (
    <Container id="contato">
      <div className="piece-1">
        <Image src="/piece-1.png" alt="piece" width="217px" height="320px" />
      </div>
      <div className="piece-2">
        <Image src="/piece-2.png" alt="piece" width="350px" height="350px" />
      </div>
      <div className="info">
        <div>
          <Typography variant="h5" fontWeight={600} className="title-head">informações de contato</Typography>
          <Typography variant="body2" fontWeight={300}>Preencha o formulário ao lado para entrar em contato com nossa equipe de suporte</Typography>
        </div>
        <div className="physical">
          <div>
            <MailIcon />
            <Typography>contato@chessflix.com.br</Typography>
          </div>
          <div>
            <PointIcon />
            <Typography>Minas Gerais - 37950-000</Typography>
          </div>
        </div>
        <div className="socials">
          {chessFlixSocials.map(({ url, icon: Icon }) => (
            <IconButton key={url} component="a" target="_blank" href={url}>
              <Icon />
            </IconButton>
          ))}
        </div>
      </div>
      <Grid component="form" container spacing={3}>
        <Grid item md={6} xs={12}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                color="primary"
                onChange={onChange}
                value={value}
                label="Nome"
                type="text"
                fullWidth
                required
              />
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                color="primary"
                onChange={onChange}
                value={value}
                label="Email"
                type="text"
                fullWidth
                required
              />
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                color="primary"
                onChange={onChange}
                value={value}
                label="Assunto"
                type="text"
                fullWidth
                required
              />
            )}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                color="primary"
                onChange={onChange}
                value={value}
                label="Mensagem"
                type="text"
                fullWidth
                multiline
                rows={4}
                required
              />
            )}
          />
        </Grid>
        <Grid justifyContent="flex-end" item container xs={12}>
          <Button type="submit">Enviar Mensagem</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Contact };
