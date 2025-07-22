package com.backgroundremoveapp.removebg.service.impl;

import com.backgroundremoveapp.removebg.entity.OrderEntity;
import com.backgroundremoveapp.removebg.repository.OrderRepository;
import com.backgroundremoveapp.removebg.service.OrderService;
import com.backgroundremoveapp.removebg.service.RazorpayService;
import com.razorpay.Order;
import com.razorpay.RazorpayException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final RazorpayService razorpayService;
    private final OrderRepository orderRepository;

    private static final Map<String, PlanDetails> PLAN_DETAILS = Map.of(
            "Basic", new PlanDetails("Basic", 100, 49.00),
            "Premium", new PlanDetails("Premium", 250, 149.00),
            "Ultimate", new PlanDetails("Ultimate", 1000, 449.00)
    );

    private record PlanDetails(String name, int credits, double amount){

    }
    @Override
    public Order createOrder(String planId, String clerkId) throws RazorpayException {
        PlanDetails details = PLAN_DETAILS.get(planId);

        if(details == null){
            throw new IllegalArgumentException("Invalid plan id:"+planId);
        }

        try{
            Order razorpayOrder = razorpayService.createOrder(details.amount(), "INR");

            OrderEntity newOrder = OrderEntity.builder()
                    .clerkId(clerkId)
                    .plan(details.name())
                    .credits(details.credits())
                    .amount(details.amount())
                    .orderId(razorpayOrder.get("id"))
                    .build();

            orderRepository.save(newOrder);
            return razorpayOrder;
        } catch (RazorpayException razorpayException) {
            throw new RazorpayException("Error",razorpayException);
        }
    }
}
