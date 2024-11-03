import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addBlogItems,
  checkToken,
  getItemsByUserId,
  getLoggedInUser,
  updateBlogItems,
} from '../services/DataService';

interface BlogItem {
  id: number;
  PublisherName: string;
  Tag: string;
  Title: string;
  Image: string;
  Description: string;
  Date: string;
  Category: string;
  IsPublished: boolean;
  IsDeleted: boolean;
  userId: number;
}

const Dashboard = ({ onLogin }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [blogTitle, setBlogTitle] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  const [blogTags, setBlogTags] = useState('');

  const [edit, setEdit] = useState(false);

  const [userId, setUserId] = useState(0);
  const [publisherName, setPublisherName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [blogId, setBlogId] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const [blogItems, setBlogItems] = useState<BlogItem[]>([]);

  const handleSave = async () => {
    const { userId, publisherName } = getLoggedInUser();
    const published: BlogItem = {
      id: edit ? blogId : 0,
      userId: userId,
      PublisherName: publisherName,
      Tag: blogTags,
      Title: blogTitle,
      Image: blogImage,
      Description: blogDescription,
      Date: new Date().toISOString(),
      Category: blogCategory,
      IsPublished: true,
      IsDeleted: false,
    };

    let result = false;
    if (edit) {
      result = await updateBlogItems(published);
    } else {
      result = await addBlogItems(published);
    }

    if (result) {
      const userBlogItems = await getItemsByUserId(userId);
      setBlogItems(userBlogItems);
    } else {
      toast({
        title: `Blog items not ${edit ? 'Updated' : 'Added'}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleShow = (
    e,
    {
      id,
      PublisherName,
      userId,
      IsDeleted,
      IsPublished,
      Title,
      Description,
      Category,
      Tag,
      Image,
    }: BlogItem
  ) => {
    onOpen();

    if (e.target.textContent === 'Add Blog Item') {
      setEdit(false);
    } else {
      setEdit(true);
    }

    setBlogId(id);
    setBlogTitle(Title);
    setUserId(userId);
    setPublisherName(publisherName);
    setBlogDescription(Description);
    setBlogCategory(Category);
    setBlogTags(Tag);
    setBlogImage(Image);
    setIsDeleted(IsDeleted);
    setIsPublished(isPublished);
  };

  const handleTitle = (e) => {
    setBlogTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setBlogDescription(e.target.value);
  };

  const handleTags = (e) => {
    setBlogTags(e.target.value);
  };

  const handleCategory = (e) => {
    setBlogCategory(e.target.value);
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlogImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePublish = async (item: BlogItem) => {
    const { userId } = getLoggedInUser();
    item.IsPublished = !item.IsPublished;

    const result = await updateBlogItems(item);
    if (result) {
      const userBlogItems = await getItemsByUserId(userId);
      setBlogItems(userBlogItems);
    } else {
      toast({
        title: `Blog item not ${edit ? 'Updated' : 'Added'}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (item: BlogItem) => {
    item.IsDeleted = !item.IsDeleted;
    const result = await updateBlogItems(item);
    if (result) {
      const userBlogItems = await getItemsByUserId(item.userId);
      setBlogItems(userBlogItems);
    } else {
      toast({
        title: `Blog item not ${edit ? 'Updated' : 'Added'}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const loadUserData = async () => {
    const userInfo = getLoggedInUser();
    onLogin(userInfo);
    setUserId(userInfo.userId);
    setPublisherName(userInfo.publisherName);

    setTimeout(async () => {
      const userBlogItems = await getItemsByUserId(userInfo.userId);
      setBlogItems(userBlogItems);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!checkToken()) {
      navigate('/Login');
    } else {
      loadUserData();
    }
  }, []);

  return (
    <>
    <Container maxW="xl" py={{ base: 10, md: 20 }}>
      {isLoading ? (
        <Flex justifyContent="center">
          <Spinner />
          <Text>...Loading</Text>
        </Flex>
      ) : (
        <>
          <Button colorScheme="blue" onClick={() => handleShow({}, {})}>
            Add Blog Item
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {edit ? 'Edit' : 'Add'} Blog Item
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    value={blogTitle}
                    onChange={handleTitle}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Enter Description"
                    value={blogDescription}
                    onChange={handleDescription}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Category"
                    value={blogCategory}
                    onChange={handleCategory}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Tags</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Tag"
                    value={blogTags}
                    onChange={handleTags}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="file"
                    accept="image/png, image/jpg"
                    onChange={handleImage}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" onClick={handleSave}>
                  {edit ? 'Save Changes' : 'Save'}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {blogItems.length === 0 ? (
            <Text>No Blog Items Found</Text>
          ) : (
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Published
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <List>
                    {blogItems.map((item) =>
                      item.IsPublished ? (
                        <ListItem key={item.id}>
                          <ListIcon />
                          <Flex justifyContent="space-between">
                            <Box>
                              <Text fontWeight="bold">Title:</Text>
                              {item.Title}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Description:</Text>
                              {item.Description}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Category:</Text>
                              {item.Category}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Tags:</Text>
                              {item.Tag}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Image:</Text>
                              {item.Image ? item.Image.slice(5, 14) : 'No image'}
                            </Box>
                            <Box>
                              <Button
                                colorScheme="red"
                                onClick={() => handleDelete(item)}
                              >
                                Delete
                              </Button>
                              <Button
                                colorScheme="blue"
                                onClick={(e) => handleShow(e, item)}
                              >
                                Edit
                              </Button>
                              <Button
                                colorScheme="green"
                                onClick={() => handlePublish(item)}
                              >
                                Unpublish
                              </Button>
                            </Box>
                          </Flex>
                        </ListItem>
                      ) : null
                    )}
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Unpublished
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <List>
                    {blogItems.map((item) =>
                      !item.IsPublished ? (
                        <ListItem key={item.id}>
                          <ListIcon />
                          <Flex justifyContent="space-between">
                            <Box>
                              <Text fontWeight="bold">Title:</Text>
                              {item.Title}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Description:</Text>
                              {item.Description}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Category:</Text>
                              {item.Category}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Tags:</Text>
                              {item.Tag}
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Image:</Text>
                              {item.Image ? item.Image.slice(5, 14) : 'No image'}
                            </Box>
                            <Box>
                              <Button
                                colorScheme="red"
                                onClick={() => handleDelete(item)}
                              >
                                Delete
                              </Button>
                              <Button
                                colorScheme="blue"
                                onClick={(e) => handleShow(e, item)}
                              >
                                Edit
                              </Button>
                              <Button
                                colorScheme="green"
                                onClick={() => handlePublish(item)}
                              >
                                Publish
                              </Button>
                            </Box>
                          </Flex>
                        </ListItem>
                      ) : null
                    )}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </>
      )}
    </Container>
    </>
  );
};

export default Dashboard;
