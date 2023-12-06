import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Department {
  department: string;
  subDepartments: string[];
}

const DepartmentList: React.FC = () => {
  const departments=[
    {
      department: 'customer_service',
      subDepartments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      subDepartments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleDepartmentSelection = (department: string, selected: boolean) => {
    if (selected) {
      // If a department is selected, add it and its sub-departments to the selected list
      const subDepartments = departments.find((dep) => dep.department === department)?.subDepartments || [];
      setSelectedDepartments((prev) => Array.from(new Set([...prev, department, ...subDepartments])));

    } else {
      // If a department is deselected, remove it and its sub-departments from the selected list
      setSelectedDepartments((prev) =>
        prev.filter((dep) => dep !== department && !departments.find((d) => d.subDepartments.includes(dep)))
      );
    }
  
  };

  const handleSubDepartmentSelection = (subDepartment: string, selected: boolean) => {
    if (selected) {
      // If a sub-department is selected, add it to the selected list
      setSelectedDepartments((prev) => Array.from(new Set([...prev, subDepartment])));
    } else {
      // If a sub-department is deselected, remove it from the selected list
      setSelectedDepartments((prev) => prev.filter((dep) => dep !== subDepartment));
    }
  };

  const isDepartmentSelected = (department: string) => selectedDepartments.includes(department);

  const isSubDepartmentSelected = (subDepartment: string) => selectedDepartments.includes(subDepartment);

  const areAllSubDepartmentsSelected = (department: Department) =>
    department.subDepartments.every((subDepartment) => isSubDepartmentSelected(subDepartment));

  return (
    <div>
      {departments.map((department) => (
        <Accordion key={department.department}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={department.department + 'panel'}>
            <Checkbox
              checked={(isDepartmentSelected(department.department) && areAllSubDepartmentsSelected(department)) || areAllSubDepartmentsSelected(department)}
              onChange={(event) => handleDepartmentSelection(department.department, event.target.checked)}
            />
            <Typography variant="body1">{department.department}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {department.subDepartments.map((subDepartment) => (
              <div key={subDepartment} style={{ marginLeft: 20 ,display:"flex", flexDirection:"row"}}>
                <Checkbox
                  checked={isSubDepartmentSelected(subDepartment)}
                  onChange={(event) => handleSubDepartmentSelection(subDepartment, event.target.checked)}
                />
                <Typography variant="body2">{subDepartment}</Typography>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default DepartmentList;
