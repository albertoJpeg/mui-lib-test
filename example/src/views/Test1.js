import Typography from '@material-ui/core/Typography'
import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import {Button} from '@material-ui/core'

export default function Test1 (props) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onHandleSubmit = () => {
    setLoading(!loading)

    setTimeout(() => {
      setOpen(false)
      setLoading(false)
    }, 3000)
  }

  return (
    <Container maxWidth='sm'>
      <Typography variant='h1'> TEST 1</Typography>
      <Button
        variant={"contained"}
        onClick={() => setOpen(!open)}
      >
        Probar Modal
      </Button>

      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc
        scelerisque viverra mauris in aliquam sem fringilla. Eu lobortis
        elementum nibh tellus molestie. Eget nunc scelerisque viverra mauris in
        aliquam. Turpis in eu mi bibendum neque. Ultricies mi eget mauris
        pharetra et ultrices. Id porta nibh venenatis cras sed felis. Pharetra
        massa massa ultricies mi quis hendrerit dolor magna. Vel pharetra vel
        turpis nunc. Dui id ornare arcu odio ut sem. Praesent tristique magna
        sit amet purus gravida quis blandit turpis. Orci porta non pulvinar
        neque laoreet. Sollicitudin tempor id eu nisl nunc mi ipsum. Sem nulla
        pharetra diam sit amet. Nibh venenatis cras sed felis eget velit aliquet
        sagittis id. Sit amet nisl purus in. Pellentesque dignissim enim sit
        amet venenatis urna cursus. Pulvinar mattis nunc sed blandit libero
        volutpat sed. Viverra nibh cras pulvinar mattis nunc. Sit amet massa
        vitae tortor condimentum. Tellus integer feugiat scelerisque varius
        morbi enim nunc. Sollicitudin nibh sit amet commodo nulla facilisi
        nullam. Nisl nisi scelerisque eu ultrices vitae auctor eu. Arcu non odio
        euismod lacinia at. Fringilla urna porttitor rhoncus dolor purus non
        enim praesent elementum. Pellentesque sit amet porttitor eget dolor
        morbi. Volutpat odio facilisis mauris sit. Turpis egestas sed tempus
        urna et pharetra pharetra massa massa. Suscipit tellus mauris a diam.
        Amet dictum sit amet justo donec enim. Arcu cursus vitae congue mauris.
        Pellentesque nec nam aliquam sem et. Aliquam id diam maecenas ultricies
        mi eget mauris pharetra. Posuere morbi leo urna molestie at elementum.
        Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
      </Typography>
    </Container>
  )
}
