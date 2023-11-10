import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: "https://cdn.pixabay.com/photo/2021/11/30/11/04/login-6835087_640.png" }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Yanna Aparecida</Titulo>
        <Text>01/12/1993</Text>
        <Text>Campina Grande</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  )
}