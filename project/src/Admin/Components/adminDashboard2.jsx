import {
  Box,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function AdminDashboard2() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
      
        fontWeight={'bold'}>
  
      </chakra.h1>
      <Heading>Welcone to MacMatch Admin Dashboard</Heading>
      <Text fontSize={"25px"}>Here is outcome of our services</Text>
      <br />
  
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 17 }}>
        <StatsCard
        
          title={'Users'}
          stat={'5,000'}
          icon={<BsPerson size={'3em'} fill={"green"}/>}
        />
        <StatsCard
          title={'Servers'}
          stat={'1,000'}
          icon={<FiServer size={'3em'} color={"#8884d8"} fill={"#FEB800"}/>}
        
        />
        <StatsCard
          title={'Datacenters'}
          stat={'7'}
          icon={<GoLocation size={'3em'} color={"#8884d8"} fill={"#FE0000"}/>}
        />
      </SimpleGrid>
    </Box>
  );
}