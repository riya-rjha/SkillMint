// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SkillMint {
    // Struct to represent a course
    struct Course {
        uint256 id;
        string name;
        uint256 price; // in wei
        address payable instructor;
    }

    // Mapping to store courses and which users have access to them
    mapping(uint256 => Course) public courses;
    mapping(address => mapping(uint256 => bool)) public courseAccess;

    // Counter to automatically assign course IDs starting from 1
    uint256 public courseCounter = 1;

    // Event emitted when a user purchases a course
    event CoursePurchased(address indexed buyer, uint256 courseId);
    event CourseAdded(uint256 courseId, string courseName, uint256 price, address instructor);

    // Constructor to add initial courses
    constructor() {
        addCourse("Data Structures & Algorithms Mastery in Java: From Basics to Advanced", 0.012 ether, payable(0x32962cd462a8b1bB0AdE5299EB218969760dB232)); 
        addCourse("Comprehensive Data Structures & Algorithms Course: C++ Edition", 0.01 ether, payable(0x4B15D5a2B926417fC0507e6e0A23db3fAEF2cd52)); 
        addCourse("React.js Professional Bootcamp: Building Modern Web Applications", 0.015 ether, payable(0x25eDE2fE525a1F05B0A352b53C0a1E3e7926A964)); 
        addCourse("Advanced Python Programming: Mastering Python for Data Science", 0.02 ether, payable(0x71eDea36B50284cF251a874edA38Bda96DFa81ac)); 
        addCourse("Machine Learning A-Z: Hands-On Python & R In Data Science", 0.025 ether, payable(0x52E51cb16957C220f58D3334ebA9225a93f7292D)); 
    }

    // Function to add a course (can be restricted to owner or instructor)
    function addCourse(
        string memory _name,
        uint256 _price,
        address payable _instructor
    ) public {
        // Automatically assign an ID to the course
        uint256 newCourseId = courseCounter;
        
        // Increment the counter for the next course
        courseCounter++;

        // Add the new course
        courses[newCourseId] = Course(newCourseId, _name, _price, _instructor);

        // Emit event
        emit CourseAdded(newCourseId, _name, _price, _instructor);
    }

    // Function to purchase a course
    function purchaseCourse(uint256 _courseId) public payable {
        Course memory course = courses[_courseId];
        require(msg.value >= course.price, "Insufficient payment");
        require(!courseAccess[msg.sender][_courseId], "Already purchased");

        // Transfer payment to the instructor
        course.instructor.transfer(msg.value);

        // Grant access to the course
        courseAccess[msg.sender][_courseId] = true;

        // Emit event
        emit CoursePurchased(msg.sender, _courseId);
    }

    // Function to check if a user has access to a course
    function hasAccess(address _user, uint256 _courseId) public view returns (bool) {
        return courseAccess[_user][_courseId];
    }

    function getCoursePrice(uint256 _courseId) external view returns (uint256) {
        return courses[_courseId].price;
    }
    
}
