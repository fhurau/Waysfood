package authdto

type LoginResponse struct {
	Name  string `gorm:"type: varchar(255)" json:"name"`
	Email string `gorm:"type: varchar(255)" json:"email"`
	Role  string `gorm:"type: varchar(255)" json:"role"`
	Token string `gorm:"type: varchar(255)" json:"token"`
}
type PegisterResponse struct {
	Name string `gorm:"type: varchar(255)" json:"name"`
	// Token string `gorm:"type: varchar(255)" json:"token"`
	Role string `gorm:"type: varchar(255)" json:"role"`
}

type CheckAuthResponse struct {
	Id     int    `gorm:"type: int" json:"id"`
	Name   string `gorm:"type: varchar(255)" json:"name"`
	Email  string `gorm:"type: varchar(255)" json:"email"`
	Status string `gorm:"type: varchar(50)"  json:"status"`
}
