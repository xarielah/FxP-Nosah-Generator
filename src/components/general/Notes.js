import {
    Box,
    Button,
    Heading,
    OrderedList,
    ListItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    Text,
} from '@chakra-ui/react';

const Notes = ({ close }) => {
    return (
        <Box mb={10} textAlign='center'>
            <Modal isOpen onClose={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>עדיין לא סיימתם {':)'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign={'center'}>
                        <Heading color={'messenger.500'} size='lg' my={4}>
                            לא לשכוח:
                        </Heading>
                        <OrderedList>
                            <ListItem>לשלוח הודעה פרטית לזוכים באתגר.</ListItem>
                            <ListItem>
                                לעדכן את המפקח בקישור ההכרזה באשכול הרלוונטי
                                לכך.
                            </ListItem>
                        </OrderedList>
                        <Text
                            fontWeight={'bold'}
                            color={'red'}
                            mt={5}
                            textDecoration={'underline'}
                        >
                            לנוחיותכם מצורפים קישורים לאשכול דיון על הזוכים +
                            אתגר בפורום שלכם.
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={close}>
                            סגור חלון
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Notes;
