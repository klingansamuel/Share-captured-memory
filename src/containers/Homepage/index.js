import React, { useRef, useState } from "react";
import logo from "../../logo.svg";
// import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Box, styled, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Add from "@mui/icons-material/Add";

import Particless from "../../components/particles";
import zIndex from "@mui/material/styles/zIndex";
import { JoinFullSharp, Opacity } from "@mui/icons-material";
// import Particles from "react-particles";

/**
 * @author
 * @function HomePage
 **/

const AddContainer = styled("Box")`
  padding: 10px;
  margin: 5px;
  border: "1px dotted #000";
  borderradius: 5px;
`;
const AddIcon = styled("Box")``;
const ButtonContainer = styled("Box")`
  background-color: red;
  align-items: center;
`;

const HomePage = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sharedFiles, setSharedFiles] = useState([]);
  const inputRef = useRef();

  const uploadFiles = () => {
    const form = new FormData();

    // for (let i=0; i<sharedFiles.length; i++){
    //   form.append(`sharedFile${i+1}`, sharedFiles[i]);
    // }
    form.append("name", name);
    form.append("message", message);
    for (let file of sharedFiles) {
      form.append("sharedFile", file);
    }
    console.log(name);
    console.log(message);
    console.log({ files: sharedFiles });
  };

  const handleSharedFiles = (e) => {
    setSharedFiles([...sharedFiles, e.target.files]);
  };

  return (
    <Box>
      <Particless style={{ zIndex: -1 }} />
      {/* minWidth was 345 but i've chaged it to the following value */}

      <Card
        sx={{
          maxWidth: 300,
          marginLeft: "5%",
          marginTop: "10%",
          borderRadius: 4,
        }}
      >
        <CardActionArea style={{ backgroundColor: "" }}>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}

          <CardContent>
            {/* <Image src="/images/Logo1.png" /> */}
            <img src="Logo2.png" alt="logo" style={{ width: 60 }} />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Rinret & Kling'an
            </Typography>

            <Box
              onClick={() => inputRef.current.click()}
              style={{
                padding: 10,
                marginTop: 30,
                border: "1px dashed #000",
                borderRadius: 5,
              }}
            >
              <input
                type="file"
                id="file"
                multiple
                hidden
                ref={inputRef}
                onChange={handleSharedFiles}
              />
              <AddIcon>
                <Add
                  style={{
                    backgroundColor: "#005fd4",
                    borderRadius: 20,
                    color: "white",
                    // marginRight: "3%",
                    padding: 2,
                  }}
                />
                <Box style={{}}>
                  <Typography style={{ fontWeight: "bold" }}>
                    Add Photos
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 12,
                    }}
                  >
                    {" "}
                    Or video files
                  </Typography>
                </Box>
              </AddIcon>
            </Box>

            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20 }}
              id="outlined-textarea"
              label="Message"
              placeholder="Optional"
              multiline
              onChange={(e) => setMessage(e.target.value)}
            />
          </CardContent>
          {sharedFiles.length > 0 ? (
            <ButtonContainer>
              <Box
                onClick={uploadFiles}
                style={{
                  backgroundColor: "#5070f2",
                  padding: "15px 0",
                  margin: "0 30px 20px 30px",
                  color: "#ffffff",
                  borderRadius: 18,
                }}
              >
                <Typography style={{ fontWeight: "bold" }}>Upload</Typography>
              </Box>
            </ButtonContainer>
          ) : (
            <ButtonContainer>
              <Box
                style={{
                  backgroundColor: "#5070f2",
                  opacity: 0.5,
                  padding: "15px 0",
                  margin: "0 30px 20px 30px",
                  color: "#ffffff",
                  borderRadius: 18,
                }}
              >
                <Typography style={{ fontWeight: "bold", opacity: 0.8 }}>
                  Upload
                </Typography>
              </Box>
            </ButtonContainer>
          )}
          {/* <ButtonContainer>
            <Box
              onClick={uploadFiles}
              style={{
                backgroundColor: "#5070f2",
                padding: "15px 0",
                margin: "0 30px 20px 30px",
                color: "#ffffff",
                borderRadius: 18,
              }}
            >
              <Typography style={{ fontWeight: "bold" }}>Upload</Typography>
            </Box>
          </ButtonContainer> */}
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default HomePage;
