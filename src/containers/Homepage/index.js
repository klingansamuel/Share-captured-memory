import React, { useEffect, useRef, useState } from "react";
import logo from "../../logo.svg";
// import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Box, CircularProgress, styled, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Add from "@mui/icons-material/Add";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import Particless from "../../components/particles";
import zIndex from "@mui/material/styles/zIndex";
import { JoinFullSharp, Opacity } from "@mui/icons-material";
import axios from "axios";
import { api } from "../../urlConfig";
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
const Msg = styled("Box")`
  font-size: 12px;
  color: black;
  font-weight: bold;
`;

const HomePage = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sharedFiles, setSharedFiles] = useState([]);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const inputRef = useRef();
  const url = api;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 10
  //     );
  //   }, 800);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const uploadFiles = async () => {
    const form = new FormData();

    form.append("name", name);
    form.append("message", message);
    [...sharedFiles].forEach((file) => {
      /* Here we give the form name 'image'. this same name in the
         upload.array('image') middleware
      */
      form.append("sharedFile", file);
    });
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    try {
      const res = await axios.post(`${url}/memory/share`, form, {
        onUploadProgress: (ProgressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: ProgressEvent.progress * 100 };
          });
        },
      });
      if (res.status === 200) {
        setMsg("Upload completed");
        console.log("upload success");
        console.log(res);
        // console.log({ name, message, sharedFiles });
      } else {
        setMsg("There was an error uploading file");
        console.log("there was an error sharing memory with couple");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSharedFiles = (e) => {
    setSharedFiles(e.target.files);
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
        {progress.started ? (
          <Box style={{}}>
            <img
              src="Logo2.png"
              alt="logo"
              style={{ width: 60, padding: 15 }}
            />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Rinret & Kling'an
            </Typography>
            <Box style={{ padding: 20 }}>
              <CircularProgressbar
                value={progress.pc}
                text={`${progress.pc}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${progress.pc})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
              {/* <progress max="100" value={progress.pc}></progress> */}
            </Box>
            {msg ? (
              <Box>
                <Msg>{msg}</Msg>
                <Box style={{ padding: 20 }}>Home</Box>
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
        ) : (
          <CardActionArea style={{ backgroundColor: "" }}>
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
                  name="sharedFile"
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
          </CardActionArea>
        )}
        {/* {msg ? <span>{msg}</span> : null} */}
      </Card>
    </Box>
  );
};

export default HomePage;
