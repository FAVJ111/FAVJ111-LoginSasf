import { css } from '../../styled-system/css';
import { Box, Flex, VStack } from '../../styled-system/jsx';
import { Lock, Mail, Eye } from 'lucide-react';

export default function LoginPage() {
  return (
    <Flex minH="100vh">
      {/* Left Side - Hero Section */}
      <Box
        flex="1"
        bg="linear-gradient(135deg, #0a2463 0%, #1e3a5f 100%)"
        color="white"
        p={{ base: 8, lg: 16 }}
        display={{ base: 'none', lg: 'block' }}
      >
        <VStack align="start" gap={8} maxW="600px">
          {/* Logo */}
          <Flex align="center" gap={3}>
            <Box bg="green.500" p={3} borderRadius="lg" className={css({ '& svg': { width: '24px', height: '24px' } })} >
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </Box>
            <Box>
              <Box fontSize="2xl" fontWeight="bold">FacturaPlus</Box>
              <Box fontSize="sm" opacity={0.8}>Facturación Electrónica</Box>
            </Box>
          </Flex>
          <Box>
            <Box fontSize="sm" mb={2} opacity={0.8}>📄</Box>
            <Box fontSize="5xl" fontWeight="bold" lineHeight="1.2">Gestiona tu</Box>
            <Box fontSize="5xl" fontWeight="bold" color="green.400" lineHeight="1.2">facturación</Box>
            <Box fontSize="5xl" fontWeight="bold" lineHeight="1.2">de forma inteligente</Box>
          </Box>
          <Box fontSize="lg" opacity={0.9} maxW="450px">La plataforma más completa para la emisión de documentos electrónicos en Colombia</Box>
          <VStack gap={4} mt={8} w="100%">
            <FeatureCard icon="📝" title="Facturación Electrónica" description="Emite facturas válidas ante la DIAN en segundos" />
            <FeatureCard icon="⚡" title="Rápido y Simple" description="Interfaz intuitiva diseñada para la productividad" />
            <FeatureCard icon="🔒" title="100% Seguro" description="Tus datos protegidos con encriptación de última generación" />
            <FeatureCard icon="⏰" title="Disponible 24/7" description="Accede desde cualquier dispositivo, cuando lo necesites" />
          </VStack>
          <Box mt="auto" opacity={0.6} fontSize="sm">© 2024 FacturaPlus. Todos los derechos reservados.</Box>
        </VStack>
      </Box>
      <Flex flex="1" align="center" justify="center" bg="gray.50" p={8}>
        <Box bg="white" p={10} borderRadius="2xl" boxShadow="xl" w="100%" maxW="480px">
          <VStack gap={6}>
            <Box bg="blue.100" p={4} borderRadius="full" color="blue.600"><Lock size={32} /></Box>
            <VStack gap={2}>
              <Box fontSize="3xl" fontWeight="bold" color="gray.800">Bienvenido</Box>
              <Box fontSize="sm" color="gray.600" textAlign="center">Ingresa a tu cuenta de facturación electrónica</Box>
            </VStack>
            <VStack gap={5} w="100%" mt={4}>
              <Box w="100%">
                <Box fontSize="sm" fontWeight="medium" mb={2} color="gray.700">Correo electrónico</Box>
                <Box position="relative">
                  <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="gray.400"><Mail size={20} /></Box>
                  <input type="email" placeholder="tu@empresa.com" className={css({ w: '100%', px: 12, py: 3, border: '1px solid', borderColor: 'gray.300', borderRadius: 'lg', fontSize: 'md', outline: 'none', transition: 'all 0.2s', _focus: { borderColor: 'blue.500', boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' } })} />
                </Box>
              </Box>
              <Box w="100%">
                <Box fontSize="sm" fontWeight="medium" mb={2} color="gray.700">Contraseña</Box>
                <Box position="relative">
                  <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="gray.400"><Lock size={20} /></Box>
                  <input type="password" placeholder="••••••••" className={css({ w: '100%', px: 12, py: 3, border: '1px solid', borderColor: 'gray.300', borderRadius: 'lg', fontSize: 'md', outline: 'none', transition: 'all 0.2s', _focus: { borderColor: 'blue.500', boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' } })} />
                  <Box position="absolute" right={4} top="50%" transform="translateY(-50%)" color="gray.400" cursor="pointer"><Eye size={20} /></Box>
                </Box>
              </Box>
              <Box w="100%" textAlign="right"><a href="#" className={css({ fontSize: 'sm', color: 'blue.600', textDecoration: 'none', _hover: { textDecoration: 'underline' } })}>¿Olvidaste tu contraseña?</a></Box>
              <button className={css({ w: '100%', bg: 'blue.600', color: 'white', py: 3.5, px: 6, borderRadius: 'lg', fontSize: 'md', fontWeight: 'semibold', cursor: 'pointer', transition: 'all 0.2s', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, _hover: { bg: 'blue.700', transform: 'translateY(-1px)', boxShadow: 'lg' } })}>Iniciar Sesión<span>→</span></button>
              <Box w="100%" textAlign="center" py={2}><Box fontSize="xs" color="gray.500">¿NUEVO EN LA PLATAFORMA?</Box></Box>
              <button className={css({ w: '100%', bg: 'white', color: 'gray.800', py: 3.5, px: 6, borderRadius: 'lg', fontSize: 'md', fontWeight: 'semibold', cursor: 'pointer', transition: 'all 0.2s', border: '2px solid', borderColor: 'gray.300', _hover: { bg: 'gray.50', borderColor: 'gray.400' } })}>Crear una cuenta</button>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Box bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)" p={4} borderRadius="xl" border="1px solid rgba(255, 255, 255, 0.2)" w="100%" transition="all 0.3s" cursor="pointer" className={css({ _hover: { bg: 'rgba(255, 255, 255, 0.15)', transform: 'translateX(8px)' } })}>
      <Flex gap={4} align="start">
        <Box fontSize="2xl">{icon}</Box>
        <Box flex="1">
          <Box fontWeight="bold" fontSize="md" mb={1}>{title}</Box>
          <Box fontSize="sm" opacity={0.8}>{description}</Box>
        </Box>
      </Flex>
    </Box>
  );
}