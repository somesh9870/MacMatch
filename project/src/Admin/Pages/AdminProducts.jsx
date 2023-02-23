import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  
  // AiFillEye
  
  import { FaRegEye } from "react-icons/fa";
  import { GrEdit } from "react-icons/gr";
  import { MdOutlineDeleteOutline } from "react-icons/md";
  import { useDispatch, useSelector } from "react-redux";
  import {
    getAdminDataProduct,
    handleAdminGetDataSuccess,
  } from "../../Redux/AdminRedux/admin.action";
  import { AdminAddProductModal } from "../Components/AdminModals/AdminAddProductModal";
  import { AdminDeleteProductModal } from "../Components/AdminModals/AdminDeleteProductModal";
  import { AdminEditProductModal } from "../Components/AdminModals/AdminEditProductModal";
  import { AdminShowProductModal } from "../Components/AdminModals/AdminShowProductModal";
  
  const AdminProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector((res) => res.adminReducer.data);
    // console.log(data);
    const [current, setCurrentPage] = useState(1);
  
    useEffect(() => {
      dispatch(getAdminDataProduct);
    }, []);
  
    return (
      <>
        <Flex flexWrap={"wrap"} margin={"30px"} justifyContent={"space-between"}>
          <Heading>All Products</Heading>
          <AdminAddProductModal />
        </Flex>
        <Box border={"5px solid #023e8a"} maxHeight={"500px"} overflow="scroll">
          <TableContainer>
            <Table variant="striped" backgroundColor={"#caf0f8"}>
              <Thead bg={"#023e8a"}>
                <Tr>
                  <Th color="white">Product Id</Th>
                  <Th color="white">Product image</Th>
                  <Th color="white">Product name</Th>
                  <Th color="white">category</Th>
                  <Th color="white">price</Th>
                  <Th color="white">Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((el,i) => (
                 
                  <Tr key={i+1}>
                    <Td>{el.id}</Td>
                    <Td>
                      <AdminShowProductModal el={el} />
                    </Td>
                    <Td>{el.title}</Td>
                    <Td>{el.category}</Td>
                    <Td>
                      {"₹ "}
                      {el.price}
                    </Td>
                    <Td>
                      {" "}
                      <Flex gap={"10px"}>
                        {" "}
                        <AdminEditProductModal /> <AdminDeleteProductModal />{" "}
                      </Flex>{" "}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Flex bg={"#023e8a"} color={"white"} justifyContent={"flex-end"}>
          <Button
            isDisabled={current === 1}
            _hover={{ backgroundColor: "grey" }}
            bg={"#023e8a"}
            color={"white"}
            cursor={"pointer"}
            onClick={() => setCurrentPage(current - 1)}
          >
            {"<"}
          </Button>
          <Button
            _hover={{ backgroundColor: "grey" }}
            bg={"#023e8a"}
            color={"white"}
          >
            {". ."}
            {current}
            {". ."}
          </Button>
          <Button
            _hover={{ backgroundColor: "grey" }}
            bg={"#023e8a"}
            color={"white"}
            cursor={"pointer"}
            onClick={() => setCurrentPage(current + 1)}
            marginRight={"20px"}
          >
            {">"}
          </Button>
        </Flex>
      </>
    );
  };
  
  export default AdminProducts;
  