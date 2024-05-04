package net.youssfi.demoensetstudents.repository;

import net.youssfi.demoensetstudents.entities.Payment;
import net.youssfi.demoensetstudents.entities.PaymentStatus;
import net.youssfi.demoensetstudents.entities.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByStudentCode(String code);
    List<Payment> findByStatus(PaymentStatus status);
    List<Payment> findByType(PaymentType type);
}
