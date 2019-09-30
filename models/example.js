module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    employerName: DataTypes.STRING,
    employerEmail: DataTypes.STRING,
    employerPhoneNumber: DataTypes.BIGINT
  });

  Employer.associate = function(models) {
    Employer.hasMany(models.Invoice, {
      onDelete: "cascade"
    });
  };
  return Employer;
};
