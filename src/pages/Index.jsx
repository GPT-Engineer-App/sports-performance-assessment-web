import { useState } from "react";
import { Box, Heading, Text, Button, Input, Select, Grid, Image, Progress, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FaSearch, FaChartLine, FaUser } from "react-icons/fa";

const exercises = [
  { id: 1, name: "Squat", type: "Weight Training", diagram: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcXVhdCUyMGV4ZXJjaXNlJTIwZGlhZ3JhbXxlbnwwfHx8fDE3MTE0MTg4NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Knee Flexion", type: "ATG", diagram: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxrbmVlJTIwZmxleGlvbiUyMGV4ZXJjaXNlJTIwZGlhZ3JhbXxlbnwwfHx8fDE3MTE0MTg4Njd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more exercises
];

const Index = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Filter exercises based on searchTerm
    // Update UI with search results
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Sports Performance Assessment
      </Heading>

      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>
            <FaUser /> Profile
          </Tab>
          <Tab>
            <FaChartLine /> Assessment
          </Tab>
          <Tab>
            <FaSearch /> Exercises
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading as="h2" size="xl" mb={4}>
              User Profile
            </Heading>
            {/* Add user profile form */}
          </TabPanel>
          <TabPanel>
            <Heading as="h2" size="xl" mb={4}>
              Assessment
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={8} mb={8}>
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  RATE
                </Heading>
                <Select placeholder="Select RATE">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </Box>
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  MAG
                </Heading>
                <Select placeholder="Select MAG">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </Box>
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  DURATION
                </Heading>
                <Select placeholder="Select DURATION">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </Box>
            </Grid>
            <Button colorScheme="blue" size="lg">
              Submit Assessment
            </Button>
          </TabPanel>
          <TabPanel>
            <Heading as="h2" size="xl" mb={4}>
              Exercise Database
            </Heading>
            <Input placeholder="Search exercises..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb={4} />
            <Button leftIcon={<FaSearch />} onClick={handleSearch}>
              Search
            </Button>
            {selectedExercise ? (
              <Box mt={8}>
                <Heading as="h3" size="lg" mb={4}>
                  {selectedExercise.name}
                </Heading>
                <Text mb={4}>Type: {selectedExercise.type}</Text>
                <Image src={selectedExercise.diagram} alt={selectedExercise.name} mb={4} />
                <Button onClick={() => setSelectedExercise(null)}>Back to Search</Button>
              </Box>
            ) : (
              <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={8}>
                {exercises.map((exercise) => (
                  <Box key={exercise.id} p={4} borderWidth={1} borderRadius="md" cursor="pointer" onClick={() => setSelectedExercise(exercise)}>
                    <Heading as="h4" size="md" mb={2}>
                      {exercise.name}
                    </Heading>
                    <Text>{exercise.type}</Text>
                  </Box>
                ))}
              </Grid>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box mt={8}>
        <Heading as="h2" size="xl" mb={4}>
          Progress Tracking
        </Heading>
        <Text mb={4}>Squat Progress</Text>
        <Progress value={80} mb={8} />
        <Text mb={4}>Knee Flexion Progress</Text>
        <Progress value={60} mb={8} />
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="xl" mb={4}>
          Coaching Insights
        </Heading>
        <Text>Based on your assessment, focus on improving your RATE and MAG scores. Incorporate more explosive exercises and increase the intensity of your workouts.</Text>
      </Box>
    </Box>
  );
};

export default Index;
