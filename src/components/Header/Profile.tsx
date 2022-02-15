import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Guilherme Cheng</Text>
                    <Text
                    color="gray.300"
                    fontSize="small"
                    >
                        guilherme.cheng@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Guilherme Cheng"  src="https://avatars.githubusercontent.com/Guilhermecheng?size=200" />
        </Flex>
    )
}