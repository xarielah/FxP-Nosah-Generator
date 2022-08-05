import { Box, Text, Heading, OrderedList, ListItem } from '@chakra-ui/react';

const Notes = () => {
    return (
        <Box mb={10} textAlign='center'>
            <Heading color='cyan.400' size='lg'>
                לא לשכוח:
            </Heading>
            <OrderedList>
                <ListItem>לשלוח הודעה פרטית לזוכים באתגר.</ListItem>
                <ListItem>
                    לעדכן את המפקח בקישור ההכרזה באשכול הרלוונטי לכך.
                </ListItem>
            </OrderedList>
        </Box>
    );
};

export default Notes;
